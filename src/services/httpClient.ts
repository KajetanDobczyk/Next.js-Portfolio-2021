import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { RetryConfig } from 'retry-axios'

type RaxAxiosInstance = AxiosInstance & {
  defaults: {
    raxConfig?: RetryConfig
  }
}

const httpClient = () => {
  const defaultOptions: AxiosRequestConfig = {
    method: 'get',
  }

  const instance: RaxAxiosInstance = axios.create(defaultOptions)

  instance.defaults.raxConfig = {
    instance,
  }

  return instance
}

export default httpClient()
