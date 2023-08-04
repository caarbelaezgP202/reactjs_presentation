export const SUBHEADING_CODESNIPPET = 
`import React, { useState } from 'react';

function Example({ backgroundColor }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  };

  return (
    <div style={{ backgroundColor }}>
      <h3 className="text-4xl mb-4">Counter</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => handleClick()}>
        Click me
      </button>
    </div>
  );
}
`;

export const CONTPRESENT_CODESNIPPET = 
`function ListingsContainerComponent() {
  const [listings, setListings] = React.useState([]);

  React.useEffect(() => {
    fetch("https://my.cms.com/listings")
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);

  return <Listings listings={listings} />;
}
`;

export const CONTPRESENT_CODESNIPPET2 =
`function ListingsPresentationalComponent(props) {
  if (props.listings.length === 0) {
    return <LoadingListings />;
  }
  
  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing listing={listing} />
      ))}
    </ListingsGrid>
  );
}`;

export const HOC_CODESNIPPET =
`function HocComponent(WrappedComponent, ...otherParams) {
  (props) => {
    const [param, setParam] = useState('');

    // Do logic you want to reuse
    // .......
  }
  
  return (
    <WrappedComponent {...props} param1={param}/>
  );
}`;

export const WRAPPEDCOMPONENT_CODESNIPPET =
`function ListingsComponent({ propsFromTheHOC }) {
  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing listing={listing} />
      ))}
    </ListingsGrid>
  );
}
export default HocComponent(ListingsComponent, ...{otherParams})
`;
