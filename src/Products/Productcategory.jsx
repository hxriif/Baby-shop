import React from "react";
import Navbar from "../component/Navbar";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBCardGroup,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import "./Product.css";

export default function Productcategory() {
  const Nav = useNavigate();
  return (
    <>
      {/* <Navbar/> */}

      <h1 className="mt-5" style={{textAlign:"center" ,color:"black	"}}>ꜱʜᴏᴘ ʙʏ ᴄᴀᴛᴇɢᴏʀʏ</h1>
      {/* <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
    <MDBCol>
      <MDBCard className='mx-auto w-50 my-3'   onClick={()=>Nav('/food')}>
        <MDBCardImage 
          src='https://m.media-amazon.com/images/I/614KLwnKJaL._AC_SL1500_.jpg'
          alt='...'
          position='top'
          height="250"
        />
        <MDBCardBody>
          <MDBCardTitle>BABY FOODS</MDBCardTitle>
          <MDBCardText>
            Here you can get all the babay food products
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard className='mx-auto w-50 my-3'  onClick={()=>Nav('/Toy')}>
        <MDBCardImage
          src='https://m.media-amazon.com/images/I/71jwx0Q31AL._AC_SL1500_.jpg'
          alt='...'
          position='top'
          height="250"
        
        />
        <MDBCardBody>
          <MDBCardTitle>BABY TOYS</MDBCardTitle>
          <MDBCardText>
          Here you can get all the babay Toys products
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard  className='mx-auto w-50 my-3' onClick={()=>Nav('/Clothe')}>
        <MDBCardImage
          src='https://m.media-amazon.com/images/I/81mG3i7CRqL._AC_UX679_.jpg'
          alt='...'
          position='top'
          height="250"
        />
        <MDBCardBody>
          <MDBCardTitle>BABY CLOTHES</MDBCardTitle>
          <MDBCardText>
          Here you can get all the babay Clothes
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard className='mx-auto w-50 my-3' onClick={()=>Nav('/care')}>
        <MDBCardImage
          src='https://m.media-amazon.com/images/I/81MJhRednWL._AC_SL1500_.jpg'
          alt='...'
          position='top'
          height="250"
        />
        <MDBCardBody>
          <MDBCardTitle>BABY CARE</MDBCardTitle>
          <MDBCardText>
          Here you can get all the baby care products
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow> */}
      <MDBCardGroup style={{backgroundColor:'black'}}>
        <MDBCard  className="mx-2 mt-4 my-4 " onClick={() => Nav("/food")}>
          <MDBCardImage
            src="https://m.media-amazon.com/images/I/71AHH4xyg8L._SX679_.jpg"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>ʙᴀʙʏ ꜰᴏᴏᴅꜱ</MDBCardTitle>
            <MDBCardText>
              ᴇᴠᴇʀʏ ʙᴀʙʏ ɪꜱ ᴜɴɪQᴜᴇ, ꜱᴏ ᴘᴀʏ ᴀᴛᴛᴇɴᴛɪᴏɴ ᴛᴏ ʏᴏᴜʀ ʙᴀʙʏ'ꜱ ᴘʀᴇꜰᴇʀᴇɴᴄᴇꜱ
              ᴀɴᴅ ᴀᴅᴊᴜꜱᴛ ᴛʜᴇ ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ ᴏꜰ ꜰᴏᴏᴅꜱ ᴀᴄᴄᴏʀᴅɪɴɢʟʏ. ꜱᴏᴍᴇ ʙᴀʙɪᴇꜱ ᴍᴀʏ
              ᴛᴀᴋᴇ ʟᴏɴɢᴇʀ ᴛᴏ ᴀᴄᴄᴇᴘᴛ ᴄᴇʀᴛᴀɪɴ ᴛᴇxᴛᴜʀᴇꜱ ᴏʀ ꜰʟᴀᴠᴏʀꜱ.
            </MDBCardText>
            <MDBCardText>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="mx-2 mt-4 my-4 " onClick={() => Nav("/Toy")}>
          <MDBCardImage
            src="https://m.media-amazon.com/images/I/81Bri2LIWtL._SX679_.jpg"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>ʙᴀʙʏ ᴛᴏʏꜱ</MDBCardTitle>
            <MDBCardText>
              ᴀʟᴡᴀʏꜱ ꜱᴜᴘᴇʀᴠɪꜱᴇ ᴘʟᴀʏᴛɪᴍᴇ, ᴀɴᴅ ᴘᴀʏ ᴀᴛᴛᴇɴᴛɪᴏɴ ᴛᴏ ʏᴏᴜʀ ʙᴀʙʏ'ꜱ ᴄᴜᴇꜱ
              ᴀɴᴅ ᴘʀᴇꜰᴇʀᴇɴᴄᴇꜱ. ꜱᴏ ᴏʙꜱᴇʀᴠᴇ ᴡʜᴀᴛ ᴛʏᴘᴇꜱ ᴏꜰ ᴛᴏʏꜱ ᴄᴀᴘᴛᴜʀᴇ ʏᴏᴜʀ ʙᴀʙʏ'ꜱ
              ɪɴᴛᴇʀᴇꜱᴛ ᴀɴᴅ ᴘʀᴏᴍᴏᴛᴇ ᴛʜᴇɪʀ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ
            </MDBCardText>
            <MDBCardText>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="mx-2 mt-4 my-4 " onClick={() => Nav("/Clothe")}>
          <MDBCardImage
            src="https://m.media-amazon.com/images/I/71LxUcbo05L._SX679_PIbundle-3,TopRight,0,0_AA679SH20_.jpg"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>ʙᴀʙʏ ᴄʟᴏᴛʜᴇꜱ</MDBCardTitle>
            <MDBCardText>
              ​🇵​​🇦​​🇾​ ​🇦​​🇹​​🇹​​🇪​​🇳​​🇹​​🇮​​🇴​​🇳​ ​🇹​​🇴​
              ​🇭​​🇴​​🇼​ ​🇾​​🇴​​🇺​​🇷​ ​🇧​​🇦​​🇧​​🇾​
              ​🇷​​🇪​​🇸​​🇵​​🇴​​🇳​​🇩​​🇸​ ​🇹​​🇴​
              ​🇩​​🇮​​🇫​​🇫​​🇪​​🇷​​🇪​​🇳​​🇹​ ​🇫​​🇦​​🇧​​🇷​​🇮​​🇨​​🇸​
              ​🇦​​🇳​​🇩​ ​🇸​​🇹​​🇾​​🇱​​🇪​​🇸​ ​🇹​​🇴​ ​🇫​​🇮​​🇳​​🇩​
              ​🇼​​🇭​​🇦​​🇹​ ​🇼​​🇴​​🇷​​🇰​​🇸​ ​🇧​​🇪​​🇸​​🇹​
              ​🇫​​🇴​​🇷​ ​🇹​​🇭​​🇪​​🇲​.
            </MDBCardText>
            <MDBCardText>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="mx-2 mt-4 my-4 " onClick={() => Nav("/care")}>
          <MDBCardImage
            src="https://m.media-amazon.com/images/I/81vZm4LRdJL._SX679_.jpg"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>ʙᴀʙʏ ᴄᴀʀᴇꜱ</MDBCardTitle>
            <MDBCardText>
              ᴛʀᴜꜱᴛ ʏᴏᴜʀ ɪɴꜱᴛɪɴᴄᴛꜱ, ᴀɴᴅ ᴅᴏɴ'ᴛ ʜᴇꜱɪᴛᴀᴛᴇ ᴛᴏ ꜱᴇᴇᴋ ᴀᴅᴠɪᴄᴇ ꜰʀᴏᴍ
              ʜᴇᴀʟᴛʜᴄᴀʀᴇ ᴘʀᴏꜰᴇꜱꜱɪᴏɴᴀʟꜱ ᴏʀ ᴇxᴘᴇʀɪᴇɴᴄᴇᴅ ᴘᴀʀᴇɴᴛꜱ ᴡʜᴇɴ ɴᴇᴇᴅᴇᴅ.
            </MDBCardText>
            <MDBCardText>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </>
  );
}
