import React, { useState } from 'react';

const FAQ = ({language}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is this App?",
      answer: "This app is built for helping the farmers to identify the crop disease, know precautions, and symptoms of their crop by uploading the image of their crop",
      questionHindi: "यह ऐप क्या है?",
      answerHindi: "यह ऐप किसानों की मदद करने के लिए बनाया गया है ताकि वे अपनी फसल की बीमारी की पहचान कर सकें, सावधानियाँ जान सकें, और अपनी फसल की लक्षणों की जानकारी पा सकें।",
    },
    {
      question: "How can I find my crop disease?",
      answer: "Click the upload button and select the image of your crop whose disease you want to find",
      questionHindi: "मैं अपनी फसल की बीमारी कैसे पा सकता हूँ?",
      answerHindi: "अपलोड बटन पर क्लिक करें और अपनी फसल की उस छवि का चयन करें जिसकी बीमारी आप जानना चाहते हैं।",
    },
    {
      question: "What other features does this app have?",
      answer: "This app has a history section where you can upload a current image of your crop, compare its health with a previously uploaded photo, and receive suggestions. It also has a community section for asking queries and a crop section with information about various crops and their diseases.",
      questionHindi: "इस ऐप में और कौन सी सुविधाएं हैं?",
      answerHindi: "इस ऐप में एक इतिहास अनुभाग है, जहां आप अपनी फसल की वर्तमान छवि अपलोड कर सकते हैं, उसकी तुलना पहले से अपलोड की गई फोटो से कर सकते हैं, और सुझाव प्राप्त कर सकते हैं। इसमें एक समुदाय अनुभाग भी है, जहाँ आप सवाल पूछ सकते हैं, और एक फसल अनुभाग जहाँ आप विभिन्न फसलों और उनकी बीमारियों के बारे में जानकारी प्राप्त कर सकते हैं।",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container w-full mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">
        { language === 'hindi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions' }
      </h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item border-b  border-gray-300 py-4">
            <div 
              className="faq-question cursor-pointer text-xl font-medium text-white flex justify-between"
              onClick={() => toggleFAQ(index)}
            >
              { language === 'hindi' ? faq.questionHindi : faq.question}
              <span className="faq-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            <div className={`faq-answer text-white mt-2 ${activeIndex === index ? 'block' : 'hidden'}`}>
              { language === 'hindi' ? faq.answerHindi : faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;