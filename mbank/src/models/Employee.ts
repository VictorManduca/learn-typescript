export default class Employee {
  private name: string
  private age: number
  private salary: number

  constructor({ name = '', age = 0, salary = 0 } = {}) {
    this.name = name
    this.age = age
    this.salary = salary
  }

  public getName(): string {
    return this.name
  }

  public getAge(): number {
    return this.age
  }

  public getSalary(): number {
    return this.salary
  }

  public setName(name: string): void {
    this.name = name
  }

  public setAge(age: number): void {
    this.age = age
  }

  public setSalary(salary: number): void {
    this.salary = salary
  }

  public getBonus(): number {
    return this.getSalary() * 0.1
  }
}
