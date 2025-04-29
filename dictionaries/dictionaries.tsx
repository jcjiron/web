export type Dictionary = {
  [key: string]: any // Lacking specific information, define a general type
  casaiProject?: {
    services?: {
      subtitle?: string
      title?: string
      description?: string
    }
  }
  movingLakeProject?: {
    details?: {
      subtitle?: string
      title?: string
      description?: string
      achievementsTitle?: string
      achievements?: string[]
    }
    services?: {
      subtitle?: string
      title?: string
      description?: string
    }
    statistics?: {
      title?: string
      subtitle?: string
      stats: {
        number: string
        plus?: boolean
        label: string
        sublabel: string
      }[]
    }
  }
  fesaProject?: {
    details?: {
      subtitle?: string
      title?: string
      description?: string
      achievementsTitle?: string
      achievements?: string[]
    }
    services?: {
      subtitle?: string
      title?: string
      description?: string
    }
    statistics?: {
      title?: string
      subtitle?: string
      stats: {
        number: string
        plus?: boolean
        label: string
        sublabel: string
      }[]
    }
  }
}
