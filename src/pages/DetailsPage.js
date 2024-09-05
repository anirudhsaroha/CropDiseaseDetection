import React from 'react'
import DisplayImage from '../components /DisplayImage'
import Header from '../components /Header'
import Footer from '../components /Footer'
import { LanguageContext } from '../navigations/LanguageContext'
import { useContext } from 'react'


const translations = {
  english : {
    welcome: 'Welcome to our application!',
    disease: 'Disease',
    symptoms: 'Symptoms',
    impact: 'Impact',
    management: 'Management and Control',
    diseaseDescription: 'Leaf curl disease in tomatoes is a significant problem that affects tomato plants, leading to reduced yield and quality. This disease is typically caused by a virus known as the Tomato Leaf Curl Virus (ToLCV), which is transmitted by whiteflies (Bemisia tabaci). The virus can severely impact tomato crops, particularly in warm and tropical regions.',
    symptomsDescription: 'The most characteristic symptom of leaf curl disease is the upward curling of the leaves. Infected leaves may also become crinkled, thicker, and exhibit a yellowish or pale coloration. In severe cases, the leaves may become distorted, and the growth of the plant is stunted. Infected plants often have reduced fruit production, and the fruits that do develop are typically smaller and of lower quality.',
    impactDescription: 'Leaf curl disease can have a devastating impact on tomato production. Infected plants not only produce less fruit, but the fruits are often unmarketable due to their poor quality. This can lead to significant economic losses for farmers, especially in regions where tomato farming is a major agricultural activity.',
    managementDescription: 'Managing leaf curl disease involves a combination of strategies:',
    culturalPractices: 'Cultural Practices: Implementing good agricultural practices such as crop rotation, removing infected plants, and using virus-free seeds can help reduce the incidence of the disease.',
    chemicalControl: 'Chemical Control: Insecticides can be used to control the population of whiteflies, thereby reducing the spread of the virus. However, care must be taken to avoid over-reliance on chemicals to prevent the development of resistance in whitefly populations.',
    resistantVarieties: 'Resistant Varieties: Growing tomato varieties that are resistant to the Tomato Leaf Curl Virus is one of the most effective ways to manage the disease. Breeding programs have developed several resistant varieties that can withstand viral infection while maintaining good yield and fruit quality.',
    ipm: 'Integrated Pest Management (IPM): Combining different control methods, including biological control (using natural predators of whiteflies), cultural practices, and minimal use of chemical controls, can effectively manage leaf curl disease.',
  },
  hindi : {
    welcome: 'हमारे एप्लिकेशन में आपका स्वागत है!',
    disease: 'रोग',
    symptoms: 'लक्षण',
    impact: 'प्रभाव',
    management: 'प्रबंधन और नियंत्रण',
    diseaseDescription: 'टमाटर में पत्तियों का मुड़ना एक महत्वपूर्ण समस्या है जो टमाटर के पौधों को प्रभावित करती है, जिससे उपज और गुणवत्ता में कमी होती है। यह रोग आमतौर पर एक वायरस द्वारा होता है जिसे टमाटर लीफ कर्ल वायरस (ToLCV) कहा जाता है, जो सफेद मक्खियों (Bemisia tabaci) द्वारा फैलता है। यह वायरस विशेष रूप से गर्म और उष्णकटिबंधीय क्षेत्रों में टमाटर की फसलों को गंभीर रूप से प्रभावित कर सकता है।',
    symptomsDescription: 'पत्तियों का मुड़ना रोग का सबसे विशिष्ट लक्षण है। संक्रमित पत्तियाँ भी सिकुड़ी, मोटी हो सकती हैं और पीली या हल्की रंगत प्रदर्शित कर सकती हैं। गंभीर मामलों में, पत्तियाँ विकृत हो सकती हैं और पौधे की वृद्धि रुक सकती है। संक्रमित पौधों की फल उत्पादन आमतौर पर कम हो जाती है, और जो फल विकसित होते हैं वे आमतौर पर छोटे और कम गुणवत्ता के होते हैं।',
    impactDescription: 'पत्तियों का मुड़ना रोग टमाटर उत्पादन पर विनाशकारी प्रभाव डाल सकता है। संक्रमित पौधे केवल कम फल पैदा नहीं करते, बल्कि फल अक्सर उनकी खराब गुणवत्ता के कारण विपणन योग्य नहीं होते। इससे किसानों को महत्वपूर्ण आर्थिक नुकसान हो सकता है, विशेषकर उन क्षेत्रों में जहां टमाटर की खेती एक प्रमुख कृषि गतिविधि है।',
    managementDescription: 'पत्तियों के मुड़ने के रोग का प्रबंधन विभिन्न रणनीतियों का संयोजन करता है:',
    culturalPractices: 'सांस्कृतिक प्रथाएँ: फसल घुमाव, संक्रमित पौधों को हटाना, और वायरस-मुक्त बीज का उपयोग जैसे अच्छे कृषि प्रथाओं को लागू करना रोग की घटनाओं को कम करने में मदद कर सकता है।',
    chemicalControl: 'रासायनिक नियंत्रण: सफेद मक्खियों की जनसंख्या को नियंत्रित करने के लिए कीटनाशक का उपयोग किया जा सकता है, जिससे वायरस का फैलाव कम हो सकता है। हालांकि, रसायनों पर अधिक निर्भरता से बचने के लिए सावधानी बरतनी चाहिए ताकि सफेद मक्खी जनसंख्या में प्रतिरोध का विकास न हो।',
    resistantVarieties: 'प्रतिरोधी किस्में: टमाटर की किस्में उगाना जो टमाटर लीफ कर्ल वायरस के प्रति प्रतिरोधी हैं, रोग को प्रबंधित करने के सबसे प्रभावी तरीकों में से एक है। प्रजनन कार्यक्रमों ने कई प्रतिरोधी किस्मों का विकास किया है जो वायरल संक्रमण का सामना कर सकती हैं जबकि अच्छी उपज और फल की गुणवत्ता बनाए रखती हैं।',
    ipm: 'समन्वित कीट प्रबंधन (IPM): विभिन्न नियंत्रण विधियों को संयोजित करना, जिसमें सफेद मक्खियों के प्राकृतिक शिकारियों का उपयोग, सांस्कृतिक प्रथाएँ, और न्यूनतम रसायनिक नियंत्रण शामिल हैं, प्रभावी ढंग से पत्तियों के मुड़ने के रोग का प्रबंधन कर सकता है।',
  }
};

const DetailsPage = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'english' ? 'hindi' : 'english'));
  };

  return (
    <div
      className="main min-h-screen w-screen pt-[4.7rem] bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200)' }}
    >
      <Header language={language} />


      <div className="w-full min-h-screen px-6 md:px-10 lg:px-28 flex justify-center items-center pt-2 pb-2">
        <div className="w-full pl-8 pr-8 bg-white bg-opacity-90 rounded-3xl shadow-xl">

          <div>
            <DisplayImage/>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-green-400 inline-block">
              {translations[language].disease}
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-6">
            {language === 'english' ? 'Leaf Curl' : 'पत्ते का मोड़'}
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              {translations[language].diseaseDescription}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-yellow-400 inline-block">
              {translations[language].symptoms}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              {translations[language].symptomsDescription}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-red-400 inline-block">
              {translations[language].impact}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              {translations[language].impactDescription}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-blue-400 inline-block">
              {translations[language].management}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {translations[language].managementDescription}
            </p>
            <ul className="list-disc list-inside text-base md:text-lg text-gray-700 mt-4 mb-3 space-y-2">
              <li>{translations[language].culturalPractices}</li>
              <li>{translations[language].chemicalControl}</li>
              <li>{translations[language].resistantVarieties}</li>
              <li>{translations[language].ipm}</li>
            </ul>
          </div>
          <div className="text-center mb-3">
          <button
            onClick={toggleLanguage}
            className="neuomorphic"
          >
            {language === 'english' ? 'हिंदी में बदलें' : 'Switch to English'}
          </button>
        </div>
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
}

export default DetailsPage
