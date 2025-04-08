import React from "react";
import './manifesto.css';
import Textfield from '../../component/textfield/textField';

const ManifestoPage = () => {
    return (
                <div className="manifesto">
                    <div className='title'>
                        <h1>About <br/>Zelluloid 42 </h1>
                    </div>
                    <Textfield />
                    <p>
            In Berlin, there are more small, large, niche and arthouse cinemas than anywhere else in Germany, including several generously funded cultural institutions committed to international film history. Even time- and cost-intensive projections of 35mm and 16mm prints can still be experienced regularly. However, analog screenings of escalatory, extreme genre cinema in all its highs and lows are in short supply at best.    
            </p>
            <p>
            The cine-collective Zelluloid Zweinundvierzig is dedicated to such cinema, among other things, with a monthly double feature, the Pleasure Dome series in the small, technologically state-of-the-art Filmrauschpalast Moabit. 
          </p>
            <p>
          The cinema that interests us is direct, attacking, sometimes simply nasty. Films that swallow you up, provoke and shift perspectives  – provided you're willing to engage with them and not just measure what’s on display against your own moral-political compass. Classics of exploitation, horror and erotic cinema are just as much a part of this wild ride as buried underground gems and the unjustly ostracized.
            We are also striving for the best possible cinematic experience, to experience these raw, analog films in all their materiality and historicity as they were, for example, present in the notorious venues along New York's 42nd Street. </p>
            <p>
            Whenever possible, we therefore screen celluloid copies and original language versions.</p>
            
            <p>We look forward to seeing you! </p>
            <p>Long Live the Pleasure Dome.</p>
                </div>
    );
};

export default ManifestoPage;
