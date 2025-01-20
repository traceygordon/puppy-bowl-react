import React from "react";
import { addPlayer } from "../api";
import { useState } from "react";

export default function AddPlayerForm({ getData }) {
  const [formData, setFormData] = useState({
    status: "bench",
    imageUrl: "",
    id: null,
    name: "",
    breed: "",
    cohortId: 1,
    updatedAt: null,
    createdAt: null,
    teamId: null,
  });

  async function handleSubmit(e) {
    e.preventDefault();
console.log(formData)
    await addPlayer(formData);
    getData();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2>Add Pup</h2>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
        </label>
        <br />
        <label>
          Breed:
          <input
            type="text"
            value={formData.breed}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, breed: e.target.value }));
            }}
          />
        </label>
        <br />
        <label>
          Status:
          <select
            name="status"
            value={formData.status}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, status: e.target.value }));
            }}
          >
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>
        <br />
        <label>
          Picture:
          <input
            type="text"
            value={formData.imageUrl}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, imageUrl: e.target.value }));
            }}
          />
        </label>
        <br />
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
