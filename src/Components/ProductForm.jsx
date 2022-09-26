const { v4: uuidv4 } = require('uuid');
const ProductForm=()=>{
   return(
     <div className="formDiv">

        <form action="">
            <label htmlFor="">Title</label> <br />
            <input type="text" />
            <label htmlFor="">Gender</label>
            <select name="Gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="">Price</label><br />
            <input type="number" />
            <label htmlFor="">Category</label><br />
            <input type="text" />
            <label htmlFor="">Image</label><br />
            <input type="image" src="https://picsum.photos/200" alt="productImg" width={48} height={48} />
            <input type="submit"/>
        </form>
        
     </div>
   )
}
export default {ProductForm}