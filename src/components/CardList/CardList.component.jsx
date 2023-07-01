import "./CardList.styles.css";

const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className="cardList">
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return (
          <div className="cardList-container" key={id}>
            <img
              src={`https://robohash.org/${id}?set=set10&size=400x400`}
              alt={`name`}
            />
            <h2>{name}</h2>
            <p>
              <span>Email:</span>
              {email}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;

// class CardList extends Component {
//   render() {
//     console.log("render");

//     const { monsters } = this.props;

//     return (
//       <div className="cardList">
//         {monsters.map((monster) => {
//           const { id, name, email } = monster;
//           return (
//             <div className="cardList-container" key={id}>
//               <img
//                 src={`https://robohash.org/${id}?set=set10&size=400x400`}
//                 alt={`name`}
//               />
//               <h2>{name}</h2>
//               <p>
//                 <span>Email:</span>
//                 {email}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default CardList;
