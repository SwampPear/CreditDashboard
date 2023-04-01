export type apiData = {
  isSuccess: boolean
  data: {
    Name: string
    XData: string[],
    YData: number[],
    Source: [],
    Target: [],
    Value: []
  }[],
  systemCode: string
  message: string
  details: string
}