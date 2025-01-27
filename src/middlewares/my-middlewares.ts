import { Request, Response, NextFunction } from "express";

export function myMiddleware(request: Response, response: Response, next:NextFunction){
  console.log("passou pelo middleware")

  return next()
}