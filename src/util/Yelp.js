const apiKey = "pINwrZk0n2bMh_tqZ6z6sEQvqbfppyCv2SHdSYOOL8Jj_5y_hTsLKGKm65EwKKnefvvLxYdB3PanXlZPwYfTeLVSqIgBmg84T9TSSKlGoqagaLqOKEIfiiZzUsQQY3Yx";
const ClientID = "_AZB4vdkK07-rZ4bd4mxiA";

const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        console.log(response);
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };
  
  export default Yelp;