import { useState } from "react";
import './AddBoxForm.css'

export function AddBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    receiverName: '',
    weight: '',
    boxColor: '#ffffff',
    destination: 'Sweden',
  });
  const [error, setError] = useState('');

  const countryMultipliers = {
    Sweden: 7.35,
    China: 11.53,
    Brazil: 15.63,
    Australia: 50.09,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { receiverName, weight, boxColor, destination } = formData;

    if (!receiverName || weight === '' || !boxColor || !destination) {
      setError('All fields are required.');
      return;
    }

    if (weight < 0) {
      setError('Weight cannot be negative.');
      setFormData({ ...formData, weight: 0 });
      return;
    }

    const shippingCost = weight * countryMultipliers[destination];
    addBox({ receiverName, weight, boxColor, destination, shippingCost });
    setFormData({ receiverName: '', weight: '', boxColor: '#ffffff', destination: 'Sweden' });
    setError('');
    alert('Submitted successfully');
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <h2>Add Shipping Box</h2>

      {error && <p className="error">{error}</p>}

      <div className="mb">
        <label >Receiver Name</label>
        <input
          type="text"
          value={formData.receiverName}
          onChange={(e) => setFormData({ ...formData, receiverName: e.target.value })}
        />
      </div>

      <div className="mb">
        <label >Weight (kg)</label>
        <input
          type="number"
          value={formData.weight}
          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
        />
      </div>

      <div className="mb">
        <label >Box Color</label>
        <input
          type="color"
          value={formData.boxColor}
          onChange={(e) => setFormData({ ...formData, boxColor: e.target.value })}
        />
      </div>

      <div className="mb">
        <label >Destination Country</label>
        <select
          value={formData.destination}
          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
        >
          {Object.keys(countryMultipliers).map((country) => (
            <option key={country} value={country}>
              {`${country} - ₹${countryMultipliers[country]}`}
            </option>
          ))}
        </select>
      </div>
      {<p className="shippingCost">{`Shipping Cost:-  ₹${(formData.weight * countryMultipliers[formData.destination]).toFixed(2)}`}</p>}

      <button type="submit" className="submit">Save</button>
    </form>
  );
}
