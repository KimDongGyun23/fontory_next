type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD'

interface HTTPInstance {
  get<T>(url: string, config?: RequestInit): Promise<T>
  delete<T>(url: string, config?: RequestInit): Promise<T>
  head<T>(url: string, config?: RequestInit): Promise<T>
  options<T>(url: string, config?: RequestInit): Promise<T>
  post<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>
  put<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>
  patch<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>
}

export class Service {
  public http: HTTPInstance
  private baseURL: string

  constructor() {
    this.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`
    this.http = {
      get: this.get.bind(this),
      delete: this.delete.bind(this),
      head: this.head.bind(this),
      options: this.options.bind(this),
      post: this.post.bind(this),
      put: this.put.bind(this),
      patch: this.patch.bind(this),
    }
  }

  private async request<T>(
    method: HTTPMethod,
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    const isFormData = data instanceof FormData

    try {
      const response = await fetch(this.baseURL + url, {
        method,
        headers: {
          ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
          ...config?.headers,
        },
        credentials: 'include',
        body: data ? JSON.stringify(data) : undefined,
        ...config,
      })

      if (!response.ok) {
        try {
          const errorBody = await response.json()
          throw new Error('네트워크 응답 오류; ' + errorBody?.message)
        } catch {
          throw new Error('네트워크 응답 오류')
        }
      }

      const responseData: T = await response.json()
      return responseData
    } catch (error) {
      console.error('데이터 요청 오류:', error)
      throw error
    }
  }

  private get<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>('GET', url, undefined, config)
  }

  private delete<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>('DELETE', url, undefined, config)
  }

  private head<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>('HEAD', url, undefined, config)
  }

  private options<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>('OPTIONS', url, undefined, config)
  }

  private post<T>(url: string, data?: unknown, config?: RequestInit): Promise<T> {
    return this.request<T>('POST', url, data, config)
  }

  private put<T>(url: string, data?: unknown, config?: RequestInit): Promise<T> {
    return this.request<T>('PUT', url, data, config)
  }

  private patch<T>(url: string, data?: unknown, config?: RequestInit): Promise<T> {
    return this.request<T>('PATCH', url, data, config)
  }
}
