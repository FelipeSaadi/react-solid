import { EmailValidation, MinLengthValidation, RequiredFieldValidation, ValidationBuilder as sut } from '@/validation/validators'
import { faker } from '@faker-js/faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const field: string = faker.database.column()

    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('Should return EmailValidation', () => {
    const field: string = faker.database.column()

    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('Should return MinLengthValidation', () => {
    const field: string = faker.database.column()
    const length: number = faker.number.int(3)

    const validations = sut.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  test('Should return a list of validations', () => {
    const field: string = faker.database.column()
    const length: number = faker.number.int(3)

    const validations = sut.field(field).required().min(length).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, length),
      new EmailValidation(field)
    ])
  })
})
