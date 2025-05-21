import { useState, useRef } from "react";
import * as htmltoImage from 'html-to-image';
import './Form.css';

export const Form = () => {

    const divRef = useRef<HTMLDivElement>(null);
    const [ದಿನಾಂಕ, setದಿನಾಂಕ] = useState('');
    const [ಸಂವತ್ಸರ, setಸಂವತ್ಸರ] = useState('');
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
    const [ತಿಥಿ, setತಿಥಿ] = useState('');
    const [ರಾಶಿ, setರಾಶಿ] = useState('');
    const [ನಕ್ಷತ್ರ, setನಕ್ಷತ್ರ] = useState('');
    const [ಲಗ್ನ, setಲಗ್ನ] = useState('');
    const [ಮೇಷ, setಮೇಷ] = useState('');
    const [ಮಿಥುನ, setಮಿಥುನ] = useState('');
    const [ಸಿಂಹ, setಸಿಂಹ] = useState('');
    const [ತುಲಾ, setತುಲಾ] = useState('');
    const [ಧನು, setಧನು] = useState('');
    const [ಕುಂಭ, setಕುಂಭ] = useState('');
    const [ವೃಷಭ, setವೃಷಭ] = useState('');
    const [ಕರ್ಕಾಟಕ, setಕರ್ಕಾಟಕ] = useState('');
    const [ಕನ್ಯಾ, setಕನ್ಯಾ] = useState('');
    const [ವೃಶ್ಚಿಕ, setವೃಶ್ಚಿಕ] = useState('');
    const [ಮಕರ, setಮಕರ] = useState('');
    const [ಮೀನ, setಮೀನ] = useState('');


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
                <div>
                <label htmlFor="username">ದಿನಾಂಕ</label>
                <input type="text" id="username"  value={ದಿನಾಂಕ} onChange={(e) => setದಿನಾಂಕ(e.target.value)}/>

                <label htmlFor="username">ಸಂವತ್ಸರ</label>
                <input type="text" id="username"  value={ಸಂವತ್ಸರ} onChange={(e) => setಸಂವತ್ಸರ(e.target.value)}/>

                <label htmlFor="username">ಅಯನಂ</label>
                <input type="text" id="username"  value={ಅಯನಂ} onChange={(e) => setಅಯನಂ(e.target.value)}/>

                <label htmlFor="username">ಋತು</label>
                <input type="text" id="username"  value={ಋತು} onChange={(e) => setಋತು(e.target.value)}/>

                <label htmlFor="username">ಮಾಸ</label>
                <input type="text" id="username"  value={ಮಾಸ} onChange={(e) => setಮಾಸ(e.target.value)}/>

                <label htmlFor="username">ಪಕ್ಷ</label>
                <input type="text" id="username"  value={ಪಕ್ಷ} onChange={(e) => setಪಕ್ಷ(e.target.value)}/>
                
                <label htmlFor="username">ಸೂರ್ಯೋದಯ (Time in AM)</label>
                <input type="text" id="username"  value={ಸೂರ್ಯೋದಯ} onChange={(e) => setಸೂರ್ಯೋದಯ(e.target.value)}/>
               
                <label htmlFor="username">ಸೂರ್ಯಾಸ್ತ(Time in PM)</label>
                <input type="text" id="username"  value={ಸೂರ್ಯಾಸ್ತ} onChange={(e) => setಸೂರ್ಯಾಸ್ತ(e.target.value)}/>
               
                <label htmlFor="username">ಚಂದ್ರನ ಉದಯ(Time in AM)</label>
                <input type="text" id="username"  value={ಚಂದ್ರನಉದಯ} onChange={(e) => setಚಂದ್ರನಉದಯ(e.target.value)}/>
                
                <label htmlFor="username">ಚಂದ್ರಸ್ತ (Time in PM)</label>
                <input type="text" id="username"  value={ಚಂದ್ರಸ್ತ} onChange={(e) => setಚಂದ್ರಸ್ತ(e.target.value)}/>
                
                <label htmlFor="username">ಶುಭ ಸಮಯ (Time in AM)</label>
                <input type="text" id="username"  value={ಶುಭಸಮಯ} onChange={(e) => setಶುಭಸಮಯ(e.target.value)}/>
                
                <label htmlFor="username">ರಾಹುಕಾಲ (Time in PM)</label>
                <input type="text" id="username"  value={ರಾಹುಕಾಲ} onChange={(e) => setರಾಹುಕಾಲ(e.target.value)}/>
              
                <label htmlFor="username">ಗುಳಿಕಕಾಲ</label>
                <input type="text" id="username"  value={ಗುಳಿಕಕಾಲ} onChange={(e) => setಗುಳಿಕಕಾಲ(e.target.value)}/>
               
                <label htmlFor="username">ಯಮಗಂಡ</label>
                <input type="text" id="username"  value={ಯಮಗಂಡ} onChange={(e) => setಯಮಗಂಡ(e.target.value)}/>
               
                <label htmlFor="username">ತಿಥಿ</label>
                <input type="text" id="username"  value={ತಿಥಿ} onChange={(e) => setತಿಥಿ(e.target.value)}/>
               
                <label htmlFor="username">ರಾಶಿ</label>
                <input type="text" id="username"  value={ರಾಶಿ} onChange={(e) => setರಾಶಿ(e.target.value)}/>

                
                <label htmlFor="username">ನಕ್ಷತ್ರ</label>
                <input type="text" id="username"  value={ನಕ್ಷತ್ರ} onChange={(e) => setನಕ್ಷತ್ರ(e.target.value)}/>

                
                <label htmlFor="username">ಲಗ್ನ</label>
                <input type="text" id="username"  value={ಲಗ್ನ} onChange={(e) => setಲಗ್ನ(e.target.value)}/>
                </div>
                
                <div>
                <label htmlFor="username">ಮೇಷ</label>
                <input type="text" id="username"  value={ಮೇಷ} onChange={(e) => setಮೇಷ(e.target.value)}/>
              
                <label htmlFor="username">ಮಿಥುನ</label>
                <input type="text" id="username"  value={ಮಿಥುನ} onChange={(e) => setಮಿಥುನ(e.target.value)}/>
              
                <label htmlFor="username">ಸಿಂಹ</label>
                <input type="text" id="username"  value={ಸಿಂಹ} onChange={(e) => setಸಿಂಹ(e.target.value)}/>
               
                <label htmlFor="username">ತುಲಾ</label>
                <input type="text" id="username"  value={ತುಲಾ} onChange={(e) => setತುಲಾ(e.target.value)}/>
               
                <label htmlFor="username">ಧನು</label>
                <input type="text" id="username"  value={ಧನು} onChange={(e) => setಧನು(e.target.value)}/>
               
                <label htmlFor="username">ಕುಂಭ</label>
                <input type="text" id="username"  value={ಕುಂಭ} onChange={(e) => setಕುಂಭ(e.target.value)}/>
                
               
                
                <label htmlFor="username">ವೃಷಭ</label>
                <input type="text" id="username"  value={ವೃಷಭ} onChange={(e) => setವೃಷಭ(e.target.value)}/>
                
                <label htmlFor="username">ಕರ್ಕಾಟಕ</label>
                <input type="text" id="username"  value={ಕರ್ಕಾಟಕ} onChange={(e) => setಕರ್ಕಾಟಕ(e.target.value)}/>
              
                <label htmlFor="username">ಕನ್ಯಾ</label>
                <input type="text" id="username"  value={ಕನ್ಯಾ} onChange={(e) => setಕನ್ಯಾ(e.target.value)}/>
               
                <label htmlFor="username">ವೃಶ್ಚಿಕ</label>
                <input type="text" id="username"  value={ವೃಶ್ಚಿಕ} onChange={(e) => setವೃಶ್ಚಿಕ(e.target.value)}/>
                
                <label htmlFor="username">ಮಕರ</label>
                <input type="text" id="username"  value={ಮಕರ} onChange={(e) => setಮಕರ(e.target.value)}/>
               
                <label htmlFor="username">ಮೀನ</label>
                <input type="text" id="username"  value={ಮೀನ} onChange={(e) => setಮೀನ(e.target.value)}/>
                </div>

               
            </form>
             <button onClick={convertPng} className="button">Submit</button>

            <div className="profile" ref={divRef} style={{ width: "600px", height: "1080px" }}>
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