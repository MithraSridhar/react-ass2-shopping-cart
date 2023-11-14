import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


var data;
//var productList;

const productList=[
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://media.wired.com/photos/5b9a9073359b1371926e43dd/master/pass/iPhoneSE-617939746.jpg"
    },
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://media.wired.com/photos/5b9a9073359b1371926e43dd/master/pass/iPhoneSE-617939746.jpg"
    },
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://media.wired.com/photos/5b9a9073359b1371926e43dd/master/pass/iPhoneSE-617939746.jpg"
    },
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://media.wired.com/photos/5b9a9073359b1371926e43dd/master/pass/iPhoneSE-617939746.jpg"
    },
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://media.wired.com/photos/5b9a9073359b1371926e43dd/master/pass/iPhoneSE-617939746.jpg"
    },
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://media.wired.com/photos/5b9a9073359b1371926e43dd/master/pass/iPhoneSE-617939746.jpg"
    },
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://media.wired.com/photos/5b9a9073359b1371926e43dd/master/pass/iPhoneSE-617939746.jpg"
    },
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "...",
        images: "https://media.wired.com/photos/5b9a9073359b1371926e43dd/master/pass/iPhoneSE-617939746.jpg"
    }
      ];

function Products(){

    return(
        <section className="py-5">
    <Container>
      <Row>
        {productList.map((eachProduct)=>(
            <GetProductCards imagelink ={eachProduct.images} productname ={eachProduct.title} productprice={eachProduct.price} />
        ))}
      </Row>
    </Container>
        </section>
    );
//     productList=  getProducts();
//    console.log(productList)
//    productList.then((response)=>{
//     console.log(response.products[0].id)
//    })
//    .catch((err)=>
//     console.log("error")
//    )
}

async function getProducts(){
    let res = await fetch("https://dummyjson.com/products")
     data = await res.json();
    console.log(data.products[0].id)
    return data;
}

function GetProductCards({imagelink,productname,productprice}){
    const [cart, setCart] = useState(true);

    const buttonHandler=()=>{
            setCart(!cart)
    }
    return (
        <Col>
        <Card style={{ width: '18rem' }}>
        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem" , right: "0.5rem"}}>Sale</div>
        <Card.Img variant="top" src={imagelink}/>
        <Card.Body>
          <Card.Title>{productname}</Card.Title>
          <Card.Text>
            {productprice}
          </Card.Text>
          <Button onClick={buttonHandler} id="button" style={{width:cart===false?"200px":"117px"}} variant="primary">{cart===true?"Add to cart":"Remove from cart"}</Button>
        </Card.Body>
      </Card>
      </Col>
    );
}


export default Products;