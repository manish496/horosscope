import { useState, useRef } from "react";
import * as htmltoImage from 'html-to-image';
import './Form.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// imports
import Dinanka from './Drops/Dinanka';
import samvathsara from './Drops/Samvathsara';
import Thiti from './Drops/Thiti';
import Zodiac from "./Drops/Zodia";
import Stars from "./Drops/Star";
import Bhavishya from "./Drops/RashiFuture";

export const Form = () => {

    const divRef = useRef<HTMLDivElement>(null);
    const [ದಿನಾಂಕ, setದಿನಾಂಕ] = useState<string | null>(null);
    const [ಸಂವತ್ಸರ, setಸಂವತ್ಸರ] = useState<string | null>(null);
    const [ಅಯನಂ, setಅಯನಂ] = useState('');
    const [ಋತು, setಋತು] = useState('');
    const [ಮಾಸ, setಮಾಸ] = useState('');
    const [ಪಕ್ಷ, setಪಕ್ಷ] = useState('');
    const [ಸೂರ್ಯೋದಯ, setಸೂರ್ಯೋದಯ] = useState('');
    const [ಸೂರ್ಯಾಸ್ತ, setಸೂರ್ಯಾಸ್ತ] = useState('');
    const [ಚಂದ್ರನಉದಯ, setಚಂದ್ರನಉದಯ] = useState('');
    const [ಚಂದ್ರಸ್ತ, setಚಂದ್ರಸ್ತ] = useState('');
    const [ಶುಭಸಮಯ, setಶುಭಸಮಯ] = useState('');
    const [ರಾಹುಕಾಲ, setರಾಹುಕಾಲ] = useState('');
    const [ಗುಳಿಕಕಾಲ, setಗುಳಿಕಕಾಲ] = useState('');
    const [ಯಮಗಂಡ, setಯಮಗಂಡ] = useState('');
    const [ತಿಥಿ, setತಿಥಿ] =  useState<string | null>(null);
    const [ರಾಶಿ, setರಾಶಿ] =  useState<string | null>(null);
    const [ನಕ್ಷತ್ರ, setನಕ್ಷತ್ರ] =  useState<string | null>(null);
    const [ಲಗ್ನ, setಲಗ್ನ] =  useState<string | null>(null);
    const [ಮೇಷ, setಮೇಷ] =  useState<string | null>(null);
    const [ಮಿಥುನ, setಮಿಥುನ] =  useState<string | null>(null);
    const [ಸಿಂಹ, setಸಿಂಹ] =  useState<string | null>(null);
    const [ತುಲಾ, setತುಲಾ] =  useState<string | null>(null);
    const [ಧನು, setಧನು] =  useState<string | null>(null);
    const [ಕುಂಭ, setಕುಂಭ] =  useState<string | null>(null);
    const [ವೃಷಭ, setವೃಷಭ] =  useState<string | null>(null);
    const [ಕರ್ಕಾಟಕ, setಕರ್ಕಾಟಕ] =  useState<string | null>(null);
    const [ಕನ್ಯಾ, setಕನ್ಯಾ] =  useState<string | null>(null);
    const [ವೃಶ್ಚಿಕ, setವೃಶ್ಚಿಕ] =  useState<string | null>(null);
    const [ಮಕರ, setಮಕರ] =  useState<string | null>(null);
    const [ಮೀನ, setಮೀನ] =  useState<string | null>(null);


    const convertPng = () => {
        if (divRef.current){
            htmltoImage.toPng(divRef.current)
            .then( function (dataUrl) {
                const link = document.createElement('a');
                link.download = `${ದಿನಾಂಕ}.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch(function (error){
                console.error("oops something went wrong", error);
            })
        }
    }

    const handleChange = () => {
        setದಿನಾಂಕ(ದಿನಾಂಕ);
        setಸಂವತ್ಸರ(ಸಂವತ್ಸರ);
        setಅಯನಂ(ಅಯನಂ);
        setಋತು(ಋತು);
        setಮಾಸ(ಮಾಸ);
        setಪಕ್ಷ(ಪಕ್ಷ);
        setಸೂರ್ಯೋದಯ(ಸೂರ್ಯೋದಯ);
        setಸೂರ್ಯಾಸ್ತ(ಸೂರ್ಯಾಸ್ತ);
        setಚಂದ್ರನಉದಯ(ಚಂದ್ರನಉದಯ);
        setಚಂದ್ರಸ್ತ(ಚಂದ್ರಸ್ತ);
        setಶುಭಸಮಯ(ಶುಭಸಮಯ);
        setರಾಹುಕಾಲ(ರಾಹುಕಾಲ);
        setಗುಳಿಕಕಾಲ(ಗುಳಿಕಕಾಲ);
        setಯಮಗಂಡ(ಯಮಗಂಡ);
        setತಿಥಿ(ತಿಥಿ);
        setನಕ್ಷತ್ರ(ನಕ್ಷತ್ರ);
        setಲಗ್ನ(ಲಗ್ನ);
        setಮೇಷ(ಮೇಷ);
        setಮಿಥುನ(ಮಿಥುನ);
        setಸಿಂಹ(ಸಿಂಹ);
        setತುಲಾ(ತುಲಾ);
        setಧನು(ಧನು);
        setಕುಂಭ(ಕುಂಭ);
        setವೃಷಭ(ವೃಷಭ);
        setಕರ್ಕಾಟಕ(ಕರ್ಕಾಟಕ);
        setಕನ್ಯಾ(ಕನ್ಯಾ);
        setವೃಶ್ಚಿಕ(ವೃಶ್ಚಿಕ);
        setಮಕರ(ಮಕರ);
        setಮೀನ(ಮೀನ);
    }

    return(
        <div>
            <form onSubmit={handleChange}>
                

                {/* <TextField  id="username"  value={ದಿನಾಂಕ} onChange={(e) => setದಿನಾಂಕ(e.target.value)} variant="outlined" label="ದಿನಾಂಕ"/> */}
                <Autocomplete className="select-option" options={Dinanka} value={ದಿನಾಂಕ} onChange={(_, newValue: string | null) => setದಿನಾಂಕ(newValue)} renderInput={(params) => <TextField {...params} label="ದಿನಾಂಕ" />} />    

                
                {/* <TextField type="text" id="username"  value={ಸಂವತ್ಸರ} onChange={(e) => setಸಂವತ್ಸರ(e.target.value)} variant="outlined" label="ಸಂವತ್ಸರ"/>  */}
                <Autocomplete className="select-option" options={samvathsara} value={ಸಂವತ್ಸರ} onChange={(_, sam: string | null) => setಸಂವತ್ಸರ(sam)} renderInput={(params) => <TextField {...params} label="ಸಂವತ್ಸರ" />} />    
      

               
                <TextField type="text" fullWidth id="username"  value={ಅಯನಂ} onChange={(e) => setಅಯನಂ(e.target.value)} variant="outlined" label="ಅಯನಂ" sx={{width:"100%"}}/>

                <TextField type="text" fullWidth id="username"  value={ಋತು} onChange={(e) => setಋತು(e.target.value)} variant="outlined" label="ಋತು"/>

               
                <TextField type="text" fullWidth id="username"  value={ಮಾಸ} onChange={(e) => setಮಾಸ(e.target.value)} variant="outlined" label="ಮಾಸ"/>

      
                <TextField type="text" fullWidth id="username"  value={ಪಕ್ಷ} onChange={(e) => setಪಕ್ಷ(e.target.value)} variant="outlined" label="ಪಕ್ಷ"/>
                
     
                <TextField type="text" fullWidth id="username"  value={ಸೂರ್ಯೋದಯ} onChange={(e) => setಸೂರ್ಯೋದಯ(e.target.value)} variant="outlined" label="ಸೂರ್ಯೋದಯ"/>
               
                <TextField type="text" fullWidth id="username"  value={ಸೂರ್ಯಾಸ್ತ} onChange={(e) => setಸೂರ್ಯಾಸ್ತ(e.target.value)} variant="outlined" label="ಸೂರ್ಯಾಸ್ತ"/>
               
                
                <TextField type="text" fullWidth id="username"  value={ಚಂದ್ರನಉದಯ} onChange={(e) => setಚಂದ್ರನಉದಯ(e.target.value)} variant="outlined" label="ಚಂದ್ರನ ಉದಯ" />
                
     
                <TextField type="text" fullWidth id="username"  value={ಶುಭಸಮಯ} onChange={(e) => setಶುಭಸಮಯ(e.target.value)} variant="outlined" label="ಶುಭಸಮಯ" />
             
                <TextField type="text" fullWidth id="username"  value={ರಾಹುಕಾಲ} onChange={(e) => setರಾಹುಕಾಲ(e.target.value)} variant="outlined" label="ರಾಹುಕಾಲ" />
              
                <TextField type="text" fullWidth id="username"  value={ಗುಳಿಕಕಾಲ} onChange={(e) => setಗುಳಿಕಕಾಲ(e.target.value)} variant="outlined" label="ಗುಳಿಕಕಾಲ" />
               
               
                <TextField type="text" fullWidth id="username"  value={ಯಮಗಂಡ} onChange={(e) => setಯಮಗಂಡ(e.target.value)} variant="outlined" label="ಯಮಗಂಡ" />
               
          
                {/* <TextField type="text" id="username"  value={ತಿಥಿ} onChange={(e) => setತಿಥಿ(e.target.value)} variant="outlined" label="ತಿಥಿ" /> */}
               <Autocomplete className="select-option" options={Thiti} value={ತಿಥಿ} onChange={(_, sam: string | null) => setತಿಥಿ(sam)} renderInput={(params) => <TextField {...params} label="ತಿಥಿ" />}/>
             
                {/* <TextField type="text" id="username"  value={ರಾಶಿ} onChange={(e) => setರಾಶಿ(e.target.value)} variant="outlined" label="ರಾಶಿ" /> */}
               <Autocomplete className="select-option" options={Zodiac} value={ರಾಶಿ} onChange={(_, sam: string | null) => setರಾಶಿ(sam)} renderInput={(params) => <TextField {...params} label="ರಾಶಿ" />}/>

                
                {/* <TextField type="text" id="username"  value={ನಕ್ಷತ್ರ} onChange={(e) => setನಕ್ಷತ್ರ(e.target.value)} variant="outlined" label="ನಕ್ಷತ್ರ" /> */}
               <Autocomplete className="select-option" options={Stars} value={ನಕ್ಷತ್ರ} onChange={(_, sam: string | null) => setನಕ್ಷತ್ರ(sam)} renderInput={(params) => <TextField {...params} label="ನಕ್ಷತ್ರ" />}/>


                <TextField type="text" fullWidth id="username"  value={ಲಗ್ನ} onChange={(e) => setಲಗ್ನ(e.target.value)} variant="outlined" label="ಲಗ್ನ" />

                {/* <TextField type="text" id="username"  value={ಮೇಷ} onChange={(e) => setಮೇಷ(e.target.value)} variant="outlined" label="ಮೇಷ" /> */}
               <Autocomplete className="select-option" options={Bhavishya} value={ಮೇಷ} onChange={(_, sam: string | null) => setಮೇಷ(sam)} renderInput={(params) => <TextField {...params} label="ಮೇಷ" />}/>
              
                {/* <TextField type="text" id="username"  value={ಮಿಥುನ} onChange={(e) => setಮಿಥುನ(e.target.value)} variant="outlined" label="ಮಿಥುನ" /> */}
               <Autocomplete className="select-option" options={Bhavishya} value={ಮಿಥುನ} onChange={(_, sam: string | null) => setಮಿಥುನ(sam)} renderInput={(params) => <TextField {...params} label="ಮಿಥುನ" />}/>
              
                {/* <TextField type="text" id="username"  value={ಸಿಂಹ} onChange={(e) => setಸಿಂಹ(e.target.value)} variant="outlined" label="ಸಿಂಹ" /> */}
               <Autocomplete className="select-option" options={Bhavishya} value={ಸಿಂಹ} onChange={(_, sam: string | null) => setಸಿಂಹ(sam)} renderInput={(params) => <TextField {...params} label="ಸಿಂಹ" />}/>
               
                {/* <TextField type="text" id="username"  value={ತುಲಾ} onChange={(e) => setತುಲಾ(e.target.value)} variant="outlined" label="ತುಲಾ" /> */}
               <Autocomplete className="select-option" options={Bhavishya} value={ತುಲಾ} onChange={(_, sam: string | null) => setತುಲಾ(sam)} renderInput={(params) => <TextField {...params} label="ತುಲಾ" />}/>
               
                {/* <TextField type="text" id="username"  value={ಧನು} onChange={(e) => setಧನು(e.target.value)} variant="outlined" label="ಧನು" /> */}
               <Autocomplete className="select-option" options={Bhavishya} value={ಧನು} onChange={(_, sam: string | null) => setಧನು(sam)} renderInput={(params) => <TextField {...params} label="ಧನು" />}/>
               
                {/* <TextField type="text" id="username"  value={ಕುಂಭ} onChange={(e) => setಕುಂಭ(e.target.value)} variant="outlined" label="ಕುಂಭ" /> */}
               <Autocomplete className="select-option" options={Bhavishya} value={ಕುಂಭ} onChange={(_, sam: string | null) => setಕುಂಭ(sam)} renderInput={(params) => <TextField {...params} label="ಕುಂಭ" />}/>
                
               
                
                {/* <TextField type="text" id="username"  value={ವೃಷಭ} onChange={(e) => setವೃಷಭ(e.target.value)} variant="outlined" label="ವೃಷಭ" /> */}
               <Autocomplete className="select-option" options={Bhavishya} value={ವೃಷಭ} onChange={(_, sam: string | null) => setವೃಷಭ(sam)} renderInput={(params) => <TextField {...params} label="ವೃಷಭ" />}/>
                
                {/* <TextField type="text" id="username"  value={ಕರ್ಕಾಟಕ} onChange={(e) => setಕರ್ಕಾಟಕ(e.target.value)} variant="outlined" label="ಕರ್ಕಾಟಕ" /> */}
               <Autocomplete className="select-option" options={Bhavishya} value={ಕರ್ಕಾಟಕ} onChange={(_, sam: string | null) => setಕರ್ಕಾಟಕ(sam)} renderInput={(params) => <TextField {...params} label="ಕರ್ಕಾಟಕ" />}/>
              
                {/* <TextField type="text" id="username"  value={ಕನ್ಯಾ} onChange={(e) => setಕನ್ಯಾ(e.target.value)} variant="outlined" label="ಕನ್ಯಾ" /> */}
                <Autocomplete className="select-option" options={Bhavishya} value={ಕನ್ಯಾ} onChange={(_, sam: string | null) => setಕನ್ಯಾ(sam)} renderInput={(params) => <TextField {...params} label="ಕನ್ಯಾ" />}/>
              
                {/* <TextField type="text" id="username"  value={ವೃಶ್ಚಿಕ} onChange={(e) => setವೃಶ್ಚಿಕ(e.target.value)} variant="outlined" label="ವೃಶ್ಚಿಕ" /> */}
                <Autocomplete className="select-option" options={Bhavishya} value={ವೃಶ್ಚಿಕ} onChange={(_, sam: string | null) => setವೃಶ್ಚಿಕ(sam)} renderInput={(params) => <TextField {...params} label="ವೃಶ್ಚಿಕ" />}/>
                
                {/* <TextField type="text" id="username"  value={ಮಕರ} onChange={(e) => setಮಕರ(e.target.value)} variant="outlined" label="ಮಕರ" /> */}
                <Autocomplete className="select-option" options={Bhavishya} value={ಮಕರ} onChange={(_, sam: string | null) => setಮಕರ(sam)} renderInput={(params) => <TextField {...params} label="ಮಕರ" />}/>
              
                {/* <TextField type="text" id="username"  value={ಮೀನ} onChange={(e) => setಮೀನ(e.target.value)} variant="outlined" label="ಮೀನ" /> */}
                <Autocomplete className="select-option" options={Bhavishya} value={ಮೀನ} onChange={(_, sam: string | null) => setಮೀನ(sam)} renderInput={(params) => <TextField {...params} label="ಮೀನ" />}/>
                

               
            </form>
             <button onClick={convertPng} className="button">Submit</button>

            <div className="profile" ref={divRef} style={{ width: "600px", height: "1090px" }}>
                <div className="today">
                    ಇಂದಿನ ಪಂಚಾಂಗ
                </div>

                <div className="today-info">
                    <div className="today-info-label">
                    <p>ದಿನಾಂಕ </p>
                    <p>ಸಂವತ್ಸರ </p>
                    <p>ಅಯನಂ </p>
                    <p>ಋತು </p>
                    <p>ಮಾಸ </p>
                    <p>ಪಕ್ಷ </p>
                    </div>

                    <div className="dash">
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    </div>

                    <div className="today-info-ans">
                         <p>{ದಿನಾಂಕ}</p>   
                         <p>{ಸಂವತ್ಸರ}</p>   
                         <p>{ಅಯನಂ}</p>   
                         <p>{ಋತು}</p>   
                         <p>{ಮಾಸ}</p>   
                         <p>{ಪಕ್ಷ}</p>   
                    </div>
                </div>

                <div className="sun">
                        <p>ಸೂರ್ಯೋದಯ:</p>
                        <p>{ಸೂರ್ಯೋದಯ}  <span>AM</span></p>

                        <p>ಸೂರ್ಯಾಸ್ತ:</p>
                        <p>{ಸೂರ್ಯಾಸ್ತ} <span>PM</span></p>
                        
                </div>
                <div className="moon">
                        <p>ಚಂದ್ರನ ಉದಯ:</p>
                        <p>{ಚಂದ್ರನಉದಯ} <span>AM</span></p>

                        <p>ಚಂದ್ರಸ್ತ:</p>
                        <p>{ಚಂದ್ರಸ್ತ}<span>PM</span></p>
                        
                </div>

                <div className="web">
                    www.Kalikamatrimony.com/9164032901
                </div>

                <div className="good-bad">

                    <div>
                    <p>ಶುಭ ಸಮಯ:</p>
                    <p>{ಶುಭಸಮಯ}</p>
                    </div>

                    <div>    
                    <p>ರಾಹುಕಾಲ:</p>
                    <p>{ರಾಹುಕಾಲ}</p>
                    </div>

                </div>

                <div className="time">

                <div>
                    <p>ಗುಳಿಕಕಾಲ:</p>
                    <p>{ಗುಳಿಕಕಾಲ}</p>
                </div>

                <div>
                    <p>ಯಮಗಂಡ:</p>
                    <p>{ಯಮಗಂಡ}</p>
                </div>

                </div>

                <div className="time">

                <div>
                    <p>ತಿಥಿ:</p>
                    <p>{ತಿಥಿ}</p>
                </div>
                
                <div>
                    <p>ರಾಶಿ:</p>
                    <p>{ರಾಶಿ}</p>
                </div>
                <div>
                    <p>ನಕ್ಷತ್ರ:</p>
                    <p>{ನಕ್ಷತ್ರ}</p>
                </div>
                <div>
                    <p>ಲಗ್ನ:</p>
                    <p>{ಲಗ್ನ}</p>
                </div>

                </div>

                <div className="rashi">
                    ರಾಶಿ ಭವಿಷ್ಯ
                </div>

                <div className="future">

                <div className="one-rashi">
                <div> 
                    <div>ಮೇಷ</div>
                    <div>ಮಿಥುನ</div>
                    <div>ಸಿಂಹ</div>
                    <div>ತುಲಾ</div>
                    <div>ಧನು</div>
                    <div>ಕುಂಭ</div>
                </div>

                <div>
                    <div className="dash">-</div>
                    <div className="dash">-</div>
                    <div className="dash">-</div>
                    <div className="dash">-</div>
                    <div className="dash">-</div>
                    <div className="dash">-</div>
                </div>
                
                <div>
                    <div>{ಮೇಷ}</div>
                    <div>{ಮಿಥುನ}</div>
                    <div>{ಸಿಂಹ}</div>
                    <div>{ತುಲಾ}</div>
                    <div>{ಧನು}</div>
                    <div>{ಕುಂಭ}</div>
                </div>
                </div>

                <div className="second-rashi">
                <div className="two-rashi">
                    <div>ವೃಷಭ</div>
                    <div>ಕರ್ಕಾಟಕ</div>
                    <div>ಕನ್ಯಾ</div>
                    <div>ವೃಶ್ಚಿಕ</div>
                    <div>ಮಕರ</div>
                    <div>ಮೀನ</div>
                </div>


                <div className="dash">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                </div>

                <div className="ans">
                    <div>{ವೃಷಭ}</div>
                    <div>{ಕರ್ಕಾಟಕ}</div>
                    <div>{ಕನ್ಯಾ}</div>
                    <div>{ವೃಶ್ಚಿಕ}</div>
                    <div>{ಮಕರ}</div>
                    <div>{ಮೀನ}</div>
                </div>
                </div>
                

                </div>
            </div>
        </div>
    )
}