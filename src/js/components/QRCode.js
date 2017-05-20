/**
 * Created by huangling on 20/05/2017.
 */
import React from 'react';

const QRCode = (props) => {
    return (
        <div className="QR-code">
            <div className="line">
                <label className="desc"><span>了解最新动态</span></label>
            </div>
            <div><img src="assets/qrcode.jpg" srcSet="assets/qrcode.jpg 2x"/> </div>
            <div>扫码关注我们</div>
        </div>
    );
};

export default QRCode;