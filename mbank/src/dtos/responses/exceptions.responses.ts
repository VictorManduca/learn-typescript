import { Response } from 'express'

export default class Exception {
  public static BadRequest(response: Response, message: string) {
    return response.status(400).json({
      error: message,
    })
  }
}
