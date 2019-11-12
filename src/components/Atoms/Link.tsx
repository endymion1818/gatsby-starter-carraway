import GatsbyLink from 'gatsby-link'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import * as token from '../tokens'
import ButtonStyles from './ButtonStyles'

export interface ILinkProps {
  openInNewTab?: boolean
  to?: string
  href?: string
  rel?: string
  noUnderline?: boolean
  activeClassName?: string
  isButton?: boolean
  onClick?: (args: unknown) => void
}

const LinkStyles = css<ILinkProps>`
  ${({ noUnderline }) => (noUnderline ? `text-decoration: none` : `text-decoration: underline;`)}
  text-decoration-skip-ink: auto;

  &:focus {
    box-shadow: 0 0 2px ${token.colors.base.primary};
  }
  ${({ isButton }) => isButton && ButtonStyles}
`

const SLink = styled(GatsbyLink)<ILinkProps>`
  ${LinkStyles}
`

const Anchor = styled.a<ILinkProps>`
  ${LinkStyles}
`

const Link: FC<ILinkProps> = ({ children, to = '', openInNewTab, noUnderline, ...other }) => {
  // This regex assumes that any internal link (intended for Gatsby to process)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // This regex checks for file extensions - any string including a dot followed by
  // a series of other charachters.

  const file = /\.[0-9a-z]+$/i.test(to)

  // Use gatsby-link for internal links, <a> for others, or <div> if no to or href is specified.
  // If internal, use the `file` regex to determine if this is a file resource, permitting a download.

  if (typeof to === 'undefined' && typeof other.href === 'undefined') {
    return <span {...other}>{children}</span>
  }

  if (internal) {
    if (file) {
      return (
        <Anchor href={to} {...other} noUnderline={noUnderline}>
          {children}
        </Anchor>
      )
    }
    return (
      <SLink to={to} {...other} noUnderline={noUnderline}>
        {children}
      </SLink>
    )
  }
  return (
    <>
      {openInNewTab ? (
        <Anchor href={to} {...other} target="_blank" rel="noopener" noUnderline={noUnderline}>
          {children}
        </Anchor>
      ) : (
        <Anchor href={to} {...other} noUnderline={noUnderline}>
          {children}
        </Anchor>
      )}
    </>
  )
}
export default Link
