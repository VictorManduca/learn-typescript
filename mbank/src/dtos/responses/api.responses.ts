import { Response } from 'express'

export default class ApiResponse {
  public static emptOk(response: Response) {
    return response.status(200).send()
  }

  public static Ok(response: Response, data: any) {
    return response.status(200).json({
      data: data,
    })
  }
}
