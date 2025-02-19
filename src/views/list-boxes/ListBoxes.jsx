import './ListBoxes.css'

export function ListBoxes({ boxes }) {
    return (
      <div className="list-wrapper">
        <h2>Shipping Boxes List</h2>
  
        {boxes.length === 0 ? (
          <p>No boxes added yet.</p>
        ) : (
          <table >
            <thead>
              <tr>
                <th>Receiver Name</th>
                <th>Weight (kg)</th>
                <th>Box Color</th>
                <th>Destination Country</th>
                <th>Shipping Cost (INR)</th>
              </tr>
            </thead>
            <tbody>
              {boxes.map((box, index) => (
                <tr key={index}>
                  <td >{box.receiverName}</td>
                  <td >{box.weight}</td>
                  <td >
                    <div
                      style={{ backgroundColor: box.boxColor }}
                      className="color-div"
                    ></div>
                  </td>
                  <td >{box.destination}</td>
                  <td >{`₹${box.shippingCost.toFixed(2)}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }