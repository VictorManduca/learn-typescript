import Employee from './Employee'

export default class Manager extends Employee {
  public getBonus(): number {
    return super.getSalary()
  }
}
