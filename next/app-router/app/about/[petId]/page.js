const Pet = async ({ params }) => {
  const { petId } = await params;
  const response = await fetch(`https://petstore.swagger.io/v2/pet/${petId}`);
  const pet = await response.json();
  console.log(pet)

  return (
    <div>
      <h1>Мой питомец номер №{petId}</h1>
      <p>{`id: ${pet.id}`}</p>
      <p>{`name: ${pet.name}`}</p>
      <p>{`status: ${pet.status}`}</p>
    </div>

  )
}

export default Pet;