import React,{ useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SaveProductToDBUsingAxios, SaveProductToDBUsingFetch, AddProductToStore } from '../../state/product/ProductActions';

let ProductComponent = (props) => {

    let product = useSelector((store)=>store.ProductReducer.product)
    console.log(product);

    let productName = useRef(null);
    let price = useRef(null);
    let desc= useRef(null);
    let rating = useRef(null);

    useEffect(()=> {
        productName.current.value = product.productName;
        price.current.value = product.price;
        desc.current.value = product.desc;
        rating.current.value = product.rating

        return ()=>{
            console.log("Component Unmounted")
        }
    },[])

    let dispatcher = useDispatch();

    let updateToStore = (evt) => {

        let productObj= {
            productName: productName.current.value,
            price: price.current.value,
            desc: desc.current.value,
            rating: rating.current.value
        }

        alert(JSON.stringify(productObj))

         //dispatcher(AddProductToStore(studentObj));
         dispatcher(SaveProductToDBUsingFetch(productObj))
         evt.preventDefault()

    }

    return (
        <>
             <h1>Product Login Page</h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" placeholder="Please type productName" ref={productName} maxLength={20} />
                    </div>
                      
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="text" placeholder="Please type price" ref={price} maxLength={20} />
                    </div>

                    <div className="col-md-12">
                        <b>Description </b>
                        <input type="text" placeholder="Please type desc" ref={desc} maxLength={20} />
                    </div>

                    <div className="col-md-12">
                        <b>Rating </b>
                        <input type="text" placeholder="Please type rating" ref={rating} maxLength={20} />
                    </div>
                    <input type="submit" className={"btn btn-primary col-md-2 saveUser"} 
                                    value={"SignIn-Up"} onClick={updateToStore}/>
                </div>
            </section>
        
        </>
    )
}
export default ProductComponent;