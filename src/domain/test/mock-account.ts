import { type AuthenticationParms } from '@/domain/usecases'
import { type AccountModel } from '@/domain/models'
import { faker } from '@faker-js/faker'

export const mockAuthentication = (): AuthenticationParms => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.string.uuid()
})
