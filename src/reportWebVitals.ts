import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPrefEntry?: ReportHandler) => {
    if(onPrefEntry && onPrefEntry instanceof Function){

        import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
            getCLS(onPrefEntry);
            getFID(onPrefEntry);
            getFCP(onPrefEntry);
            getLCP(onPrefEntry);
            getTTFB(onPrefEntry);
    });

}
};

export default reportWebVitals;