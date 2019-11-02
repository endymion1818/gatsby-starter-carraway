export interface IBaseColorSpec {
  primary: '#00B9A7'
  secondary: '#4A3EDE'
}

export interface INeutralColorSpec {
  white: '#FFFFFF'
  nearWhite: '#F8F8F8'
  light: '#EAEAEE'
  medium: '#DCDBE2'
  nearDark: '#63637E'
  dark: '#0D0A38'
}

export interface ISemanticColorSpec {
  success: '#1EC06A'
  alert: '#FFB428'
  error: '#EE0505'
}

interface IColorSpec {
  base: IBaseColorSpec
  neutral: INeutralColorSpec
  semantic: ISemanticColorSpec
}

export const colors: IColorSpec = {
  base: {
    primary: '#00B9A7',
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

export interface IBreakpoint {
  small: '36em'
  medium: '64em'
  large: '75em'
}
export const breakpoint: IBreakpoint = {
  small: '36em',
  medium: '64em',
  large: '75em',
}

export interface ISize {
  zero: '0rem'
  single: '1rem'
  singleplushalf: '1.5rem'
  double: '2rem'
  triple: '3rem'
  quad: '4rem'
  sextuple: '6rem'
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

export interface ITextalign {
  left: 'left'
  center: 'center'
  right: 'right'
}
export const textalign: ITextalign = {
  left: 'left',
  center: 'center',
  right: 'right',
}

export interface IGridalign {
  start: 'grid-start'
  center: 'center'
  end: 'grid-end'
}
export const gridalign: IGridalign = {
  start: 'grid-start',
  center: 'center',
  end: 'grid-end',
}

export interface IFlexalign {
  start: 'flex-start'
  center: 'center'
  end: 'flex-end'
}
export const flexalign: IFlexalign = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
}

export interface IBorderradius {
  small: '0.25rem'
  medium: '0.5rem'
  large: '0.75rem'
}
export const borderradius: IBorderradius = {
  small: '0.25rem',
  medium: '0.5rem',
  large: '0.75rem',
}
