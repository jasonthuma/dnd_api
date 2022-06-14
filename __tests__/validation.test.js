const { validateNewEntry } = require("../validation");
const httpMocks = require("node-mocks-http");
const expressValidator = require("express-validator");

it("should show name is required error if no name is provided in the request", () => {
  const mockReq = httpMocks.createRequest({
    method: "post",
    body: {
      name: "",
      armor_class: 14,
      init_bonus: 3,
    },
  });
  const mockRes = httpMocks.createResponse();
  console.log(expressValidator(validateNewEntry(mockReq, mockRes, jest.fn())));
});
