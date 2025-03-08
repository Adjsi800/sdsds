import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, Info, ShieldCheck, Calendar, Store,
  ChevronRight, Gift, HelpCircle, Building2, Phone,
  Receipt, CreditCard as CardIcon, AlertCircle, Wallet, Menu, X
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Supported Cards", href: "#supported-cards" },
    { name: "How To Check", href: "#how-to-check" },
    { name: "Important Info", href: "#important-info" },
    { name: "FAQ", href: "#faq" },
    { name: "Security", href: "#security" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Security Notice */}
      <div className="bg-primary-900 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-1 text-sm">
          <p className="font-medium">🔒 Official Guide: How to Check Your Gift Card Balance Safely</p>
          <p className="text-primary-100">Learn the secure way to check your balance online</p>
        </div>
      </div>

      {/* New Navigation Header */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center group">
                <CardIcon className="h-8 w-8 text-primary-600 group-hover:text-primary-700 transition-colors" />
                <span className="ml-2 text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">Amex Gift Card Balance</span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

     {/* Hero Section */}
      <header id="home" className="relative bg-white shadow-sm overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Gift cards and shopping"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Check Your Amex Gift Card Balance
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Complete guide for Amex gift card balance check and Visa card balance verification
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Gift Card Example"
              className="rounded-lg shadow-2xl w-full md:w-1/3"
            />
          </div>
        </div>
      </header>

       <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Trust Indicators */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Trust Our Service</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { number: "1M+", text: "Balance Checks" },
              { number: "24/7", text: "Support Available" },
              { number: "100%", text: "Secure & Private" },
              { number: "4.9/5", text: "User Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="text-2xl font-bold text-primary-600">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Card Types Showcase */}
        <section id="supported-cards" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Supported Gift Cards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556742208-999815fca738?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="American Express Gift Card"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">Amex Gift Cards</h3>
                <p className="text-gray-200">Check balance instantly</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Visa Gift Card"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">Visa Gift Cards</h3>
                <p className="text-gray-200">Simple balance verification</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Guide with Visual Examples */}
        <section id="how-to-check" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">How to Check Your Balance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Step 1: Locate Your Card Number",
                icon: CreditCard,
                description: "Find the 15-digit number on the front of your Amex gift card.",
                image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                title: "Step 2: Find Security Code",
                icon: ShieldCheck,
                description: "Locate the 4-digit security code on the front of your card.",
                image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                title: "Step 3: Check Online",
                icon: Store,
                description: "Visit our secure portal to check your balance instantly.",
                image: "https://images.unsplash.com/photo-1735896832487-47ef673838ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlY2slMjBvbmxpbmV8ZW58MHx8MHx8fDA%3D"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="card overflow-hidden"
              >
                <img 
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <step.icon size={24} className="text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Important Information with Visual Aid */}
        <section id="important-info" className="mb-16 scroll-mt-20">
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-white overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6">Important Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Amex Gift Cards</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>15-digit card number required</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>4-digit security code on front</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>No registration required</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Visa Gift Cards</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>16-digit card number required</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>3-digit CVV on back</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>Balance check available 24/7</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Gift Card Security Features"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <ShieldCheck className="text-primary-600 w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Visual Elements */}
        <section id="faq" className="mb-16 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about gift card balance checks</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I check my Amex gift card balance?",
                answer: "To check your Amex gift card balance, locate the 15-digit card number and 4-digit security code on the front of your card. Visit amexgiftcardbalances.com and enter these details to view your current balance.",
                icon: CardIcon
              },
              {
                question: "Where can I find my Visa gift card balance?",
                answer: "You can check your Visa gift card balance by visiting our secure portal at amexgiftcardbalances.com. You'll need your 16-digit card number and 3-digit security code.",
                icon: Wallet
              },
              {
                question: "Are there fees for checking my gift card balance?",
                answer: "No, checking your gift card balance is completely free. There are no fees associated with viewing your balance on amexgiftcardbalances.com.",
                icon: AlertCircle
              },
              {
                question: "How often should I check my balance?",
                answer: "We recommend checking your balance before making purchases to ensure sufficient funds. You can check your balance anytime at amexgiftcardbalances.com.",
                icon: Calendar
              },
              {
                question: "What types of gift cards can I check?",
                answer: "Our service supports Amex gift cards, Visa gift cards, Express gift cards, and Celebrate gift cards. Each type has specific requirements for balance checking.",
                icon: Gift
              },
              {
                question: "Is it safe to check my gift card balance online?",
                answer: "Yes, our platform uses bank-level encryption to protect your card information. We follow strict security protocols to ensure your data remains safe.",
                icon: ShieldCheck
              },
              {
                question: "What should I do if my gift card is lost or stolen?",
                answer: "If your Amex gift card is lost or stolen, contact American Express immediately to report it and protect your balance. Keep your card number and receipt for reference.",
                icon: HelpCircle
              },
              {
                question: "Can I check multiple gift card balances?",
                answer: "Yes, you can check multiple gift card balances on our platform. There's no limit to how many different cards you can check, and it's always free.",
                icon: Receipt
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <faq.icon className="text-primary-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trust and Security Section */}
        <section id="security" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Security & Safety</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Trusted & Secure</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="text-primary-600 w-6 h-6" />
                    <span>Bank-level security encryption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Info className="text-primary-600 w-6 h-6" />
                    <span>24/7 balance checking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="text-primary-600 w-6 h-6" />
                    <span>Official balance check portal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary-600 w-6 h-6" />
                    <span>24/7 Customer Support</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Secure Gift Card Transactions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="mb-16">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Understanding Your Amex Gift Card Balance</h2>
            <p className="text-lg mb-4">
              American Express gift cards provide a convenient and secure way to make purchases. Whether you've received an Amex gift card or purchased one yourself, knowing your balance is essential for making the most of your card.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Benefits of Amex Gift Cards</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Widely accepted at millions of locations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>No monthly fees or expiration dates</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Protected against loss and theft</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Easy balance checking online</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Tips for Gift Card Usage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Register your card for online shopping</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Keep your receipt and card number safe</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Check balance regularly before shopping</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                    <span>Use split-tender for larger purchases</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* New Section: Card Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Gift Card Security Features</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Amex Security Features</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-medium mb-2">Card Identification Features</h4>
                    <p className="text-gray-700 mb-3">
                      American Express gift cards include multiple security elements to protect your funds.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>Unique 15-digit card number</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>4-digit security code</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>Holographic security elements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Online Protection</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-medium mb-2">Digital Security Measures</h4>
                    <p className="text-gray-700 mb-3">
                      Our online balance checking system employs advanced security protocols.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>SSL encryption for all transactions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>Automatic session timeouts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>24/7 fraud monitoring system</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Section: Card Usage Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Card Usage Guidelines</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">In-Store Purchases</h3>
              <h4 className="text-lg font-medium mb-2 text-primary-600">How to Use at Retailers</h4>
              <p className="text-gray-700 mb-4">
                Using your gift card for in-store purchases is simple and convenient.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>Present your card at checkout</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>Swipe or insert the card when prompted</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>For split payments, tell the cashier how much to charge</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Online Shopping</h3>
              <h4 className="text-lg font-medium mb-2 text-primary-600">E-Commerce Tips</h4>
              <p className="text-gray-700 mb-4">
                Your gift card works for online purchases just like a regular credit card.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>Register your card if required</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>Enter card details at checkout</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>Verify your remaining balance first</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Balance Management</h3>
              <h4 className="text-lg font-medium mb-2 text-primary-600">Track Your Spending</h4>
              <p className="text-gray-700 mb-4">
                Keep track of your gift card balance to maximize its value.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>Check balance before shopping</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>Save transaction receipts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>Use full card value to avoid leftover small amounts</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>


      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Gift Card Types</h3>
              <ul className="space-y-2">
                <li><a href="http://amexgiftcardbalances.com/amex" className="text-gray-400 hover:text-white transition-colors">Amex Gift Cards</a></li>
                <li><a href="http://amexgiftcardbalances.com/visa" className="text-gray-400 hover:text-white transition-colors">Visa Gift Cards</a></li>
                <li><a href="http://amexgiftcardbalances.com/express" className="text-gray-400 hover:text-white transition-colors">Express Gift Cards</a></li>
                <li><a href="http://amexgiftcardbalances.com/celebrate" className="text-gray-400 hover:text-white transition-colors">Celebrate Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#how-to-check" className="text-gray-400 hover:text-white transition-colors">Balance Check Guide</a></li>
                <li><a href="#security" className="text-gray-400 hover:text-white transition-colors">Security Tips</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 Amex Gift Card Balance Guide | amexgiftcardbalances.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
