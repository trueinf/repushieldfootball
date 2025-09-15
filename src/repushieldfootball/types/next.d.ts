declare module 'next/font/google' {
  export interface FontConfig {
    subsets?: string[]
    variable?: string
    weight?: string | string[]
    style?: string | string[]
    display?: string
    preload?: boolean
    fallback?: string[]
    adjustFontFallback?: boolean
  }

  export function Inter(config?: FontConfig): {
    className: string
    style: { fontFamily: string }
    variable?: string
  }

  export function Roboto(config?: FontConfig): {
    className: string
    style: { fontFamily: string }
    variable?: string
  }

  export function Open_Sans(config?: FontConfig): {
    className: string
    style: { fontFamily: string }
    variable?: string
  }
}

declare module 'next/script' {
  import { ComponentProps } from 'react'
  
  interface ScriptProps extends ComponentProps<'script'> {
    strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload' | 'worker'
    onLoad?: () => void
    onReady?: () => void
    onError?: () => void
  }
  
  export default function Script(props: ScriptProps): JSX.Element
}

declare module 'next/link' {
  import { ComponentProps, ReactNode } from 'react'
  
  interface LinkProps extends Omit<ComponentProps<'a'>, 'href'> {
    href: string
    as?: string
    replace?: boolean
    scroll?: boolean
    shallow?: boolean
    passHref?: boolean
    prefetch?: boolean
    locale?: string | false
    children: ReactNode
  }
  
  export default function Link(props: LinkProps): JSX.Element
}

declare module 'next/navigation' {
  export function usePathname(): string
  export function useRouter(): {
    push: (href: string) => void
    replace: (href: string) => void
    back: () => void
    forward: () => void
    refresh: () => void
    prefetch: (href: string) => void
  }
  export function useSearchParams(): URLSearchParams
}
