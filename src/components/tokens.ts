import {
  IBorderradius,
  IBreakpoint,
  IColorSpec,
  IFlexalign,
  IGridalign,
  ISize,
  ITextalign,
} from './types'

export const colors: IColorSpec = {
  base: {
    primary: '#000080',
    secondary: '#4A3EDE',
  },
  neutral: {
    white: '#FFFFFF',
    nearWhite: '#F8F8F8',
    light: '#EAEAEE',
    medium: '#DCDBE2',
    nearDark: '#63637E',
    dark: '#0D0A38',
  },
  semantic: {
    success: '#1EC06A',
    alert: '#FFB428',
    error: '#EE0505',
  },
}

export const breakpoint: IBreakpoint = {
  small: '36em',
  medium: '64em',
  large: '75em',
}

export const size: ISize = {
  zero: '0rem',
  single: '1rem',
  singleplushalf: '1.5rem',
  double: '2rem',
  triple: '3rem',
  quad: '4rem',
  sextuple: '6rem',
}

export const textalign: ITextalign = {
  left: 'left',
  center: 'center',
  right: 'right',
}

export const gridalign: IGridalign = {
  start: 'grid-start',
  center: 'center',
  end: 'grid-end',
}

export const flexalign: IFlexalign = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
}

export const borderradius: IBorderradius = {
  small: '0.25rem',
  medium: '0.5rem',
  large: '0.75rem',
}
