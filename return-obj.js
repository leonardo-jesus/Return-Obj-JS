var address = {
  street: "Rua dos pinheiros",
  number: 1293,
  neighborhood: "Centro",
  city: "São Paulo",
  state: "SP"
};

const result = `The user lives in ${address.city} / ${address.state} in neighbourhood ${address.neighborhood}, at street ${address.street} with number ${address.number}.`;
console.log(result);