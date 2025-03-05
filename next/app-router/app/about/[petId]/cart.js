"use client"

import { useState } from "react";

export default function Cart({ petId }) {
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    setAdded(!added);
  }

  return (
    <div className="mt-6">
      {added && <p>В корзине</p>}
      <button className="font-bold py-2 px-4 rounded bg-blue-400" onClick={handleAddToCart}>
        {added ? 'Убрать' : 'Добавить'}
      </button>
    </div>
  )
}