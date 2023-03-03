import { UserBusiness } from "../../src/business/UserBusiness";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { SignupInputDTO } from "../../src/dtos/userDTO";

describe("signup", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );
  test("retorna token de login da conta normal", async () => {
    const input: SignupInputDTO = {
      name: "Normal Mock",
      email: "normal2@email.com",
      password: "bananinha",
    };
    const response = await userBusiness.signup(input);
    expect(response.token).toBe("token-mock-normal");
  });
});
