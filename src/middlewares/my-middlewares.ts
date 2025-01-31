import { Request, Response, NextFunction } from "express";

export function myMiddleware(request: Request, response: Response, next: NextFunction){
  request.user_id = "123456"
  

  console.log("passou pelo middleware!")

  return next() // next serve para chamar a próxima requisição
}