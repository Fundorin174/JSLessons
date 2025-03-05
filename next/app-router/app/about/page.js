export default async function About() {
  const pets = await fetch(`https://petstore.swagger.io/v2/pet/findByStatus?status=available`).then((resp) => resp.json());

  return (
    <div>
      <h1>О моих животных</h1>
      <div className="flex flex-row flex-wrap gap-4">
        {pets.slice(0, 10).map(pet => (
          <div className="border-1 w-xs">
            <p>{`id: ${pet.id}`}</p>
            <p>{`name: ${pet.name}`}</p>
            <p>{`status: ${pet.status}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}