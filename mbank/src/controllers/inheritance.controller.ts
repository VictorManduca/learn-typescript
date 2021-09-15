import { Request, Response } from 'express'

import ApiResponse from '../dtos/responses/api.responses'
import Exception from '../dtos/responses/exceptions.responses'

import Employee from '../models/Employee'
import Manager from '../models/Manager'

export default class Inheritance {
  public get(request: Request, response: Response) {
    try {
      const manager: Manager = new Manager()
      const employee: Employee = new Employee({
        name: 'Victor',
        age: 22,
        salary: 6_000,
      })

      return ApiResponse.Ok(response, {
        managerSalary: manager.getSalary(),
        managerBonus: manager.getBonus(),
        employeeSalary: employee.getSalary(),
        employeeBonus: employee.getBonus(),
      })
    } catch (error) {
      throw Exception.BadRequest(response, `${error}`)
    }
  }
}
