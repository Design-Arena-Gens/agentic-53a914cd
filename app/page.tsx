'use client'

import { useState } from 'react'

interface Activity {
  time: string
  title: string
  description: string
  location: string
  duration: string
  tips: string[]
}

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<'culture' | 'food' | 'modern'>('culture')

  const itineraries = {
    culture: [
      {
        time: '8:00 AM',
        title: 'Chen Clan Ancestral Hall',
        description: 'Start your day at this stunning example of Lingnan architecture, featuring intricate wood carvings, stone sculptures, and pottery.',
        location: 'Zhongshan 7th Road, Liwan District',
        duration: '1.5 hours',
        tips: ['Arrive early to avoid crowds', 'Photography allowed', 'Metro: Chen Clan Academy Station']
      },
      {
        time: '10:00 AM',
        title: 'Shamian Island',
        description: 'Stroll through this historic colonial area with European-style buildings, leafy streets, and riverside views.',
        location: 'Shamian, Liwan District',
        duration: '1.5 hours',
        tips: ['Great for photos', 'Peaceful walking area', 'Visit small cafes and shops']
      },
      {
        time: '12:00 PM',
        title: 'Dim Sum Lunch',
        description: 'Enjoy authentic Cantonese dim sum at a traditional restaurant.',
        location: 'Guangzhou Restaurant or Taotaoju',
        duration: '1.5 hours',
        tips: ['Try har gow (shrimp dumplings)', 'Siu mai is a must', 'Arrive before 1 PM to avoid long waits']
      },
      {
        time: '2:00 PM',
        title: 'Canton Tower',
        description: 'Visit the iconic Canton Tower for panoramic city views from the observation deck.',
        location: 'Haizhu District',
        duration: '2 hours',
        tips: ['Buy tickets online in advance', 'Clear days offer best views', 'Metro: Canton Tower Station']
      },
      {
        time: '5:00 PM',
        title: 'Pearl River Cruise',
        description: 'Take an evening cruise along the Pearl River to see the city lights come alive.',
        location: 'Dashatou Wharf or Tianzi Wharf',
        duration: '1.5 hours',
        tips: ['Book sunset cruise for best experience', 'Bring a light jacket', 'Camera essential']
      },
      {
        time: '7:30 PM',
        title: 'Beijing Road Pedestrian Street',
        description: 'End your day with shopping, street food, and the vibrant night atmosphere.',
        location: 'Beijing Road, Yuexiu District',
        duration: '2 hours',
        tips: ['Try street food snacks', 'See ancient road ruins through glass floor', 'Great for souvenir shopping']
      }
    ],
    food: [
      {
        time: '8:00 AM',
        title: 'Traditional Breakfast',
        description: 'Start with authentic Guangzhou breakfast: rice noodle rolls (cheung fun) and soy milk.',
        location: 'Local breakfast shops in Liwan District',
        duration: '1 hour',
        tips: ['Try different fillings', 'Order fresh soy milk', 'Cash may be needed']
      },
      {
        time: '9:30 AM',
        title: 'Qingping Market',
        description: 'Explore this historic wholesale market to see exotic ingredients and local produce.',
        location: 'Qingping Road, Liwan District',
        duration: '1.5 hours',
        tips: ['Visit early for best selection', 'Fascinating cultural experience', 'Keep an open mind']
      },
      {
        time: '11:30 AM',
        title: 'Premium Dim Sum Experience',
        description: 'Indulge in high-quality dim sum at a renowned restaurant.',
        location: 'Bingsheng Mansion or Diandude',
        duration: '2 hours',
        tips: ['Make reservation if possible', 'Try specialty items', 'Order tea to accompany meal']
      },
      {
        time: '2:00 PM',
        title: 'Dessert Stop - Sweet Soup',
        description: 'Cool down with traditional Cantonese sweet soups (tong sui) at a dessert shop.',
        location: 'Nanxin Sweet Shop',
        duration: '45 minutes',
        tips: ['Try double-skin milk pudding', 'Red bean soup is classic', 'Affordable and refreshing']
      },
      {
        time: '3:30 PM',
        title: 'Shangxiajiu Pedestrian Street',
        description: 'Walk through this historic commercial street, sampling snacks and local treats.',
        location: 'Shangxiajiu Road, Liwan District',
        duration: '2 hours',
        tips: ['Try wife cake (老婆饼)', 'Sample preserved fruits', 'Explore old shops']
      },
      {
        time: '6:00 PM',
        title: 'Cantonese Roast Dinner',
        description: 'Feast on famous Cantonese roasted meats: char siu, roast goose, and crispy pork.',
        location: 'Sheng Kee Dessert or local roast meat shop',
        duration: '1.5 hours',
        tips: ['Roast goose is specialty', 'Rice or noodles complement well', 'Get there before 7 PM']
      },
      {
        time: '8:00 PM',
        title: 'Night Food Street',
        description: 'End with night market snacks and drinks at a lively food street.',
        location: 'Huifu East Road Food Street',
        duration: '1.5 hours',
        tips: ['Try grilled skewers', 'Herbal tea is refreshing', 'Pace yourself - lots to try!']
      }
    ],
    modern: [
      {
        time: '8:30 AM',
        title: 'Zhujiang New Town',
        description: 'Start in Guangzhou\'s modern CBD, admiring futuristic architecture and skyline.',
        location: 'Tianhe District',
        duration: '1 hour',
        tips: ['Great morning photos', 'Visit Opera House exterior', 'Metro: Zhujiang New Town']
      },
      {
        time: '10:00 AM',
        title: 'Guangdong Museum',
        description: 'Explore this modern museum showcasing Guangdong history, culture, and natural resources.',
        location: 'Zhujiang East Road, Tianhe District',
        duration: '2 hours',
        tips: ['Free admission with ID', 'Tuesday-Sunday only', 'Interactive exhibits available']
      },
      {
        time: '12:30 PM',
        title: 'Taikoo Hui Lunch',
        description: 'Dine at upscale restaurants in this luxury shopping complex.',
        location: 'Tianhe Road, Tianhe District',
        duration: '1.5 hours',
        tips: ['Multiple cuisine options', 'Modern ambiance', 'Good for shopping after']
      },
      {
        time: '2:30 PM',
        title: 'Canton Tower Experience',
        description: 'Full Canton Tower experience including observation deck, Sky Drop thrill ride, and exhibits.',
        location: 'Haizhu District',
        duration: '2.5 hours',
        tips: ['Pre-book tickets online', 'Try the bubble tram', 'Sky Drop for thrill seekers']
      },
      {
        time: '5:30 PM',
        title: 'Haixinsha Asian Games Park',
        description: 'Relax in this modern riverside park with views of Canton Tower and new city skyline.',
        location: 'Haixinsha, Tianhe District',
        duration: '1 hour',
        tips: ['Perfect sunset spot', 'Free entry', 'Watch light show preparations']
      },
      {
        time: '7:00 PM',
        title: 'Pearl River New City Light Show',
        description: 'Watch the spectacular LED light show on buildings along the Pearl River.',
        location: 'Haixinsha or Pearl River waterfront',
        duration: '1 hour',
        tips: ['Shows at 7 PM and 8 PM', 'Best views from waterfront', 'Stunning photography opportunity']
      },
      {
        time: '8:30 PM',
        title: 'K11 Art Mall',
        description: 'End your day at this art-integrated shopping mall with galleries, dining, and nightlife.',
        location: 'Zhujiang New Town, Tianhe District',
        duration: '1.5 hours',
        tips: ['Art exhibitions inside', 'Rooftop bar options', 'Open late']
      }
    ]
  }

  const currentItinerary = itineraries[selectedTheme]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          color: 'white',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '10px',
            fontWeight: '700'
          }}>
            One Day in Guangzhou 🏮
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9
          }}>
            Your perfect itinerary for exploring the Pearl of the Pearl River
          </p>
        </header>

        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setSelectedTheme('culture')}
            style={{
              padding: '15px 30px',
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s',
              background: selectedTheme === 'culture' ? 'white' : 'rgba(255, 255, 255, 0.2)',
              color: selectedTheme === 'culture' ? '#667eea' : 'white',
              transform: selectedTheme === 'culture' ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            🏛️ Culture & History
          </button>
          <button
            onClick={() => setSelectedTheme('food')}
            style={{
              padding: '15px 30px',
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s',
              background: selectedTheme === 'food' ? 'white' : 'rgba(255, 255, 255, 0.2)',
              color: selectedTheme === 'food' ? '#667eea' : 'white',
              transform: selectedTheme === 'food' ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            🥟 Food Paradise
          </button>
          <button
            onClick={() => setSelectedTheme('modern')}
            style={{
              padding: '15px 30px',
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s',
              background: selectedTheme === 'modern' ? 'white' : 'rgba(255, 255, 255, 0.2)',
              color: selectedTheme === 'modern' ? '#667eea' : 'white',
              transform: selectedTheme === 'modern' ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            🌆 Modern City
          </button>
        </div>

        <div style={{
          display: 'grid',
          gap: '25px'
        }}>
          {currentItinerary.map((activity, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                marginBottom: '15px'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '15px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  minWidth: '100px',
                  textAlign: 'center'
                }}>
                  {activity.time}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{
                    margin: '0 0 10px 0',
                    fontSize: '1.5rem',
                    color: '#2d3748'
                  }}>
                    {activity.title}
                  </h2>
                  <p style={{
                    margin: '0 0 10px 0',
                    color: '#4a5568',
                    fontSize: '1.05rem',
                    lineHeight: '1.6'
                  }}>
                    {activity.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    marginBottom: '15px',
                    fontSize: '0.95rem',
                    color: '#718096'
                  }}>
                    <span>📍 {activity.location}</span>
                    <span>⏱️ {activity.duration}</span>
                  </div>
                  <div style={{
                    background: '#f7fafc',
                    padding: '15px',
                    borderRadius: '10px',
                    borderLeft: '4px solid #667eea'
                  }}>
                    <strong style={{ color: '#667eea' }}>💡 Tips:</strong>
                    <ul style={{
                      margin: '10px 0 0 0',
                      paddingLeft: '20px',
                      color: '#4a5568'
                    }}>
                      {activity.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} style={{ marginBottom: '5px' }}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer style={{
          marginTop: '50px',
          padding: '30px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h3 style={{ marginTop: 0 }}>Essential Information</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            textAlign: 'left'
          }}>
            <div>
              <strong>🚇 Transportation:</strong>
              <p style={{ fontSize: '0.95rem', marginTop: '8px' }}>
                Guangzhou Metro is efficient and affordable. Get a day pass or use WeChat Pay/Alipay.
              </p>
            </div>
            <div>
              <strong>💰 Budget:</strong>
              <p style={{ fontSize: '0.95rem', marginTop: '8px' }}>
                Expect ¥300-500 per person for food, transport, and attractions (excluding shopping).
              </p>
            </div>
            <div>
              <strong>🌤️ Best Time:</strong>
              <p style={{ fontSize: '0.95rem', marginTop: '8px' }}>
                October to December offers pleasant weather. Avoid peak summer heat and humidity.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
