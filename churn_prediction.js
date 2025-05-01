import * as tf from '@tensorflow/tfjs-node';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { Transform } from 'stream';
import * as dfd from 'danfojs-node';
  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });import { pipeline } from 'stream/promises';
const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
     // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomer
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { nor   // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFxed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {malizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => 
    const normalized = {...  // Calculate churn 
  const totalCustomers = data.lengt
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
     // Calculate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).lh;
  const churnRate = churnedCustomers / totalCustomers
  consoleconst totalCustomers = data.length
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  .log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`)
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {const churnRate = churnedCustomersimport { Transform } from 'stream';
import * as dfd from 'danfojs-node';
  const normalizedTestData = testData.map(item => {
    const normalized = {...item}
      // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
    // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churne === 1).length;
  const churnRate = churnedCustomers / totalCustomer
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
     // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`)
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`)
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {  // Calculate churn rate
  const totalCustomers = data.length
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats }
}  const normalizedTestData = testData.map(item => 
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {   // Calculate churn rate
  const totalCustomers = data.length
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {   // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`)
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...  // Calculate churn rate
  const totalCustomers = data.length;
  cconst churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`)
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomersonst churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...numericalFeatures.forEach(feature => {
  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feat    const normalized = {...item};om 'danfojs-node';
  const normalizedTestDat  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...a = testData.map(item => {
    const normalized = {...item};
     // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {... numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });import { pipeline } from 'stream/promises';
import { Transform } from 'stream';
import * as dfd from 'danfojs-node';
  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feat    const normalized = {...item};om 'danfojs-node';
  const normalizedTestData = testData.map(item => {
      // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {   // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => { const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });import { pipeline } from 'stream/promises';
import { Transform } from 'stream';
import * as dfd from 'danfojs-node';
  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feat    const normalized = {...item};om 'danfojs-node';
  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });import { pipeline } from 'stream/promises';
import { Transform } from 'stream';
import * as dfd from 'danfojs-node';
  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feat    const normalized = {...item};
    numericalFeatures.forEach(feature => {    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feat    const normalized = {...item};
    numericalFeatures.forEach(feature => {    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feat    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });import { pipeline } from 'stream/promises';
import { Transform } from 'stream';
import * as dfd from 'danfojs-node';
  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });
    return normalized;
  });
  function generateBusinessInsights(data, metrics, featureImportance) {
  console.log("\nGenerating business insights...");
  
  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...
    return normalized;
  });import { pipeline } from 'stream/promises';
import { Transform } from 'stream';
import * as dfd from 'danfojs-node';
  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });
    return normalized;
  });
  function generateBusinessInsights(data, metrics, featureImportance) {
  console.log("\nGenerating business insights...");
  
  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });
    return normalized;
  });
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });
    return normalized;
  });
  
  return { normalizedTrainData, normalizedTestData, stats };
}
// Generate synthetic SaaS customer data for demonstration
function generateSyntheticData(numSamples = 1000) {
  console.log("Generating synthetic SaaS customer data...");
  
  const data = [];
  
  for (let i = 0; i < numSamples; i++) {
    // Customer demographics
    const customerAge = Math.floor(Math.random() * 60) + 20;
    const customerTenure = Math.floor(Math.random() * 36); // months
    const subscriptionTier = ['basic', 'premium', 'enterprise'][Math.floor(Math.random() * 3)];
    
    // Usage patterns
    const loginFrequency = Math.floor(Math.random() * 30); // days per month
    const featureUsageCount = Math.floor(Math.random() * 50);
    const avgSessionDuration = Math.floor(Math.random() * 60) + 5; // minutes
    
    // Support interactions
    const supportTickets = Math.floor(Math.random() * 5);
    const avgResponseTime = Math.floor(Math.random() * 24) + 1; // hours
    
    // Financial indicators
    const monthlySpend = subscriptionTier === 'basic' ? 
      Math.random() * 50 + 10 : 
      subscriptionTier === 'premium' ? 
        Math.random() * 200 + 50 : 
        Math.random() * 1000 + 200;
    
    // Recent behavior (temporal features)
    const loginDecline = Math.random() < 0.3 ? Math.random() * 0.5 : 0;
    const featureUsageDecline = Math.random() < 0.3 ? Math.random() * 0.5 : 0;
    
    // Determine churn based on a combination of factors
    // Higher probability of churn if:
    // - Low login frequency
    // - Declining usage
    // - Many support tickets
    // - Short tenure
    let churnProbability = 0;
    churnProbability += (30 - loginFrequency) / 30 * 0.3;
    churnProbability += loginDecline * 0.2;
    churnProbability += featureUsageDecline * 0.2;
    churnProbability += (supportTickets / 5) * 0.15;
    churnProbability += (36 - customerTenure) / 36 * 0.15;
    
    // Adjust for subscription tier (enterprise customers less likely to churn)
    if (subscriptionTier === 'enterprise') churnProbability *= 0.7;
    
    // Final churn label
    const churned = Math.random() < churnProbability ? 1 : 0;
    
    data.push({
      customerAge,
      customerTenure,
      subscriptionTier,
      loginFrequency,
      featureUsageCount,
      avgSessionDuration,
      supportTickets,
      avgResponseTime,
      monthlySpend,
      loginDecline,
      featureUsageDecline,
      churned
    });
  }
  
  return data;
}

// Preprocess data for machine learning
function preprocessData(data) {
  console.log("Preprocessing data...");
  
  // Convert categorical variables to one-hot encoding
  const processedData = data.map(customer => {
    // Deep copy to avoid modifying original
    const processed = {...customer};
    
    // One-hot encode subscription tier
    if (processed.subscriptionTier === 'basic') {
      processed.tier_basic = 1;
      processed.tier_premium = 0;
      processed.tier_enterprise = 0;
    } else if (processed.subscriptionTier === 'premium') {
      processed.tier_basic = 0;
      processed.tier_premium = 1;
      processed.tier_enterprise = 0;
    } else {
      processed.tier_basic = 0;
      processed.tier_premium = 0;
      processed.tier_enterprise = 1;
    }
    
    // Remove original categorical column
    delete processed.subscriptionTier;
    
    return processed;
  });
  
  return processedData;
}

// Feature engineering
function engineerFeatures(data) {
  console.log("Engineering features...");
  
  return data.map(customer => {
    const enhanced = {...customer};
    
    // Engagement score (combination of login frequency and feature usage)
    enhanced.engagementScore = (customer.loginFrequency / 30 + customer.featureUsageCount / 50) / 2;
    
    // Support satisfaction proxy (inverse of tickets and response time)
    enhanced.supportSatisfaction = 1 - ((customer.supportTickets / 5 + customer.avgResponseTime / 24) / 2);
    
    // Value for money (usage relative to spend)
    enhanced.valueRatio = customer.featureUsageCount / (customer.monthlySpend + 1);
    
    // Churn risk indicator (combination of decline metrics)
    enhanced.churnRiskScore = (customer.loginDecline + customer.featureUsageDecline) / 2;
    
    return enhanced;
  });
}

// Split data into training and testing sets
function splitData(data, testRatio = 0.2) {
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  const testSize = Math.floor(data.length * testRatio);
  const testData = shuffled.slice(0, testSize);
  const trainData = shuffled.slice(testSize);
  
  return { trainData, testData };
}

// Normalize features to improve model performance
function normalizeData(trainData, testData) {
  console.log("Normalizing features...");
  
  // Identify numerical features to normalize
  const numericalFeatures = [
    'customerAge', 'customerTenure', 'loginFrequency', 
    'featureUsageCount', 'avgSessionDuration', 'supportTickets',
    'avgResponseTime', 'monthlySpend', 'loginDecline', 
    'featureUsageDecline', 'engagementScore', 'supportSatisfaction',
    'valueRatio', 'churnRiskScore'
  ];
   const monthlySpend = subscriptionTier === 'basic' ? 
      Math.random() * 50 + 10 : 
      subscriptionTier === 'premium' ? 
        Math.random() * 200 + 50 : 
        Math.random() * 1000 + 200; const monthlySpend = subscriptionTier === 'basic' ? 
      Math.random() * 50 + 10 : 
      subscriptionTier === 'premium' ? 
        Math.random() * 200 + 50 : 
        Math.random() * 1000 + 200; const monthlySpend = subscriptionTier === 'basic' ? 
      Math.random() * 50 + 10 : 
      subscriptionTier === 'premium' ? 
        Math.random() * 200 + 50 : 
        Math.random() * 1000 + 200; const monthlySpend = subscriptionTier === 'basic' ? 
      Math.random() * 50 + 10 : 
      subscriptionTier === 'premium' ? 
        Math.random() * 200 + 50 : 
        Math.random() * 1000 + 200; const monthlySpend = subscriptionTier === 'basic' ? 
      Math.random() * 50 + 10 : 
      subscriptionTier === 'premium' ? 
        Math.random() * 200 + 50 : 
        Math.random() * 1000 + 200;
  // Calculate mean and std for each feature from training data
  const stats = {};
  numericalFeatures.forEach(feature => {
    const values = trainData.map(item => item[feature]);
    const sum = values.reduce((a, b) => a + b, 0);
    const mean = sum / values.length;
    
    const squaredDiffs = values.map(value => Math.pow(value - mean, 2));
    const variance = squaredDiffs.reduce((a, b) => a + b, 0) / values.length;
    const std = Math.sqrt(variance);
    
    stats[feature] = { mean, std };
  });
  
  // Normalize training data
  const normalizedTrainData = trainData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });
    return normalized;
  });
  
  // Normalize test data using training statistics
  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });
    return normalized;
  });
  
  return { normalizedTrainData, normalizedTestData, stats };
}
  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });
    return normalized;
  });
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });
    return normalized;
  });
  
  return { normalizedTrainData, normalizedTestData, stats };
}  const normalizedTestData = testData.map(item => {
    const normalized = {...item};
    numericalFeatures.forEach(feature => {
      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });
    return normalized;
  });
  
  return { normalizedTrainData, normalizedTestData, stats };
}
// Prepare data for TensorFlow.js
function prepareForTensorflow(data) {
  // Separate features and labels
  const labels = data.map(item => item.churned);
  
  // Remove the target variable from features
  const features = data.map(item => {
    const featureObj = {...item};
    delete featureObj.churned;
    return Object.values(featureObj);
  });
  
  return {
    features: tf.tensor2d(features),
    labels: tf.tensor2d(labels, [labels.length, 1])
  };
}

// Build and train a logistic regression model
async function trainLogisticRegression(trainFeatures, trainLabels, epochs = 100) {
  console.log("Training logistic regression model...");
  
  // Create a sequential model
  const model = tf.sequential();
  
  // Add a single dense layer
  model.add(tf.layers.dense({
    units: 1,
    activation: 'sigmoid',
    inputShape: [trainFeatures.shape[1]]
  }));
  
  // Compile the model
  model.compile({
    optimizer: tf.train.adam(0.01),
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
  });
  
  // Train the model
  const history = await model.fit(trainFeatures, trainLabels, {
    epochs,
    validationSplit: 0.2,
    verbose: 0
  });
  
  console.log(`Final training accuracy: ${history.history.acc[epochs-1].toFixed(4)}`);
  console.log(`Final validation accuracy: ${history.history.val_acc[epochs-1].toFixed(4)}`);
  
  return model;
}

// Build and train a neural network model
async function trainNeuralNetwork(trainFeatures, trainLabels, epochs = 100) {
  console.log("Training neural network model...");
  
  // Create a sequential model
  const model = tf.sequential();
  
  // Add layers
  model.add(tf.layers.dense({
    units: 16,
    activation: 'relu',
    inputShape: [trainFeatures.shape[1]]
  }));
  
  model.add(tf.layers.dense({
    units: 8,
    activation: 'relu'
  }));
  
  model.add(tf.layers.dense({
    units: 1,
    activation: 'sigmoid'
  }));
  
  // Compile the model
  model.compile({
    optimizer: tf.train.adam(0.001),
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
  });
  
  // Train the model
  const history = await model.fit(trainFeatures, trainLabels, {
    epochs,
    validationSplit: 0.2,
    verbose: 0
  });
  
  console.log(`Final training accuracy: ${history.history.acc[epochs-1].toFixed(4)}`);
  console.log(`Final validation accuracy: ${history.history.val_acc[epochs-1].toFixed(4)}`);
  
  return model;
}

// Evaluate model performance
async function evaluateModel(model, testFeatures, testLabels) {
  console.log("Evaluating model performance...");
  
  // Get model predictions
  const predictions = model.predict(testFeatures);
  const predictionValues = await predictions.data();
  
  // Convert to binary predictions using 0.5 threshold
  const binaryPredictions = predictionValues.map(p => p > 0.5 ? 1 : 0);
  
  // Get actual labels
  const actualValues = await testLabels.data();
  
  // Calculate metrics
  let truePositives = 0;
  let falsePositives = 0;
  let trueNegatives = 0;
  let falseNegatives = 0;
  
  for (let i = 0; i < actualValues.length; i++) {
    if (actualValues[i] === 1 && binaryPredictions[i] === 1) truePositives++;
    if (actualValues[i] === 0 && binaryPredictions[i] === 1) falsePositives++;
    if (actualValues[i] === 0 && binaryPredictions[i] === 0) trueNegatives++;
    if (actualValues[i] === 1 && binaryPredictions[i] === 0) falseNegatives++;
  }
  
  // Calculate evaluation metrics
  const accuracy = (truePositives + trueNegatives) / actualValues.length;
  const precision = truePositives / (truePositives + falsePositives) || 0;
  const recall = truePositives / (truePositives + falseNegatives) || 0;
  const f1Score = 2 * (precision * recall) / (precision + recall) || 0;
  
  console.log("Model Evaluation Metrics:");
  console.log(`Accuracy: ${accuracy.toFixed(4)}`);
  console.log(`Precision: ${precision.toFixed(4)}`);
  console.log(`Recall: ${recall.toFixed(4)}`);
  console.log(`F1 Score: ${f1Score.toFixed(4)}`);
  
  // Calculate ROC-AUC
  // Sort predictions and corresponding actual values
  const predictionPairs = [];
  for (let i = 0; i < predictionValues.length; i++) {
    predictionPairs.push({
      prediction: predictionValues[i],
      actual: actualValues[i]
    });
  }
  
  predictionPairs.sort((a, b) => b.prediction - a.prediction);
  
  // Calculate ROC points
  const roc = [];
  let truePos = 0;
  let falsePos = 0;
  const totalPos = actualValues.filter(v => v === 1).length;
  const totalNeg = actualValues.filter(v => v === 0).length;
  
  for (const pair of predictionPairs) {
    if (pair.actual === 1) {
      truePos++;
    } else {
      falsePos++;
    }
    
    const tpr = truePos / totalPos;
    const fpr = falsePos / totalNeg;
    
    roc.push({ tpr, fpr });
  }
  
  // Calculate AUC using trapezoidal rule
  let auc = 0;
  for (let i = 1; i < roc.length; i++) {
    auc += (roc[i].fpr - roc[i-1].fpr) * (roc[i].tpr + roc[i-1].tpr) / 2;
  }
  
  console.log(`ROC-AUC: ${auc.toFixed(4)}`);
  
  return {
    accuracy,
    precision,
    recall,
    f1Score,
    auc,
    confusionMatrix: {
      truePositives,
      falsePositives,
      trueNegatives,
      falseNegatives
    }
  };
}

// Feature importance analysis
async function analyzeFeatureImportance(model, featureNames) {
  console.log("\nAnalyzing feature importance...");
  
  // For logistic regression, we can directly examine the weights
  const weights = model.layers[0].getWeights()[0];
  const weightValues = await weights.data();
  
  // Create array of feature names and their importance
  const featureImportance = [];
  for (let i = 0; i < featureNames.length; i++) {
    featureImportance.push({
      feature: featureNames[i],
      importance: Math.abs(weightValues[i])
    });
  }
  
  // Sort by importance
  featureImportance.sort((a, b) => b.importance - a.importance);
  
  console.log("Feature Importance (top 5):");
  for (let i = 0; i < Math.min(5, featureImportance.length); i++) {
    console.log(`${i+1}. ${featureImportance[i].feature}: ${featureImportance[i].importance.toFixed(4)}`);
  }
  
  return featureImportance;
}

// Generate business insights
function generateBusinessInsights(data, metrics, featureImportance) {
  console.log("\nGenerating business insights...");
  
  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  function generateBusinessInsights(data, metrics, featureImportance) {
  console.log("\nGenerating business insights...");
  
  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  function generateBusinessInsights(data, metrics, featureImportance) {
  console.log("\nGenerating business insights...");
  
  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  function generateBusinessInsights(data, metrics, featureImportance) {
  console.log("\nGenerating business insights...");
  
  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;
  
  console.log(`Overall Churn Rate: ${(churnRate * 100).toFixed(2)}%`);
  
  // Analyze churn by subscription tier
  const basicCustomers = data.filter(c => c.tier_basic === 1);
  const premiumCustomers = data.filter(c => c.tier_premium === 1);
  const enterpriseCustomers = data.filter(c => c.tier_enterprise === 1);
  
  const basicChurnRate = basicCustomers.filter(c => c.churned === 1).length / basicCustomers.length;
  const premiumChurnRate = premiumCustomers.filter(c => c.churned === 1).length / premiumCustomers.length;
  const enterpriseChurnRate = enterpriseCustomers.filter(c => c.churned === 1).length / enterpriseCustomers.length;
  
  console.log("\nChurn Rate by Subscription Tier:");
  console.log(`Basic: ${(basicChurnRate * 100).toFixed(2)}%`);
  console.log(`Premium: ${(premiumChurnRate * 100).toFixed(2)}%`);
  console.log(`Enterprise: ${(enterpriseChurnRate * 100).toFixed(2)}%`);
  
  // Key insights based on feature importance
  console.log("\nKey Business Insights:");
  
  // Get top 3 features
  const topFeatures = featureImportance.slice(0, 3);
  
  // Generate insights based on top features
  topFeatures.forEach(feature => {
    switch(feature.feature) {
      case 'loginFrequency':
        console.log("- User engagement is critical: Customers with low login frequency are at high risk of churning. Consider implementing engagement campaigns and product tutorials.");
        break;
      case 'customerTenure':
        console.log("- The first few months are crucial: Newer customers are more likely to churn. Focus on improving onboarding and early customer success.");
        break;
      case 'loginDecline':
        console.log("- Declining usage is a strong warning sign: Monitor usage patterns and proactively reach out to customers showing decreased engagement.");
        break;
      case 'featureUsageDecline':
        console.log("- Feature adoption correlates with retention: Customers using fewer features over time are at risk. Improve feature discovery and education.");
        break;
      case 'supportTickets':
        console.log("- Support experience impacts retention: High number of support tickets indicates frustration. Improve support quality and product usability.");
        break;
      case 'churnRiskScore':
        console.log("- Combined decline metrics are powerful predictors: Implement an early warning system based on usage decline patterns.");
        break;
      case 'engagementScore':
        console.log("- Overall engagement is a key retention factor: Develop a comprehensive engagement strategy across all customer touchpoints.");
        break;
      case 'tier_basic':
      case 'tier_premium':
      case 'tier_enterprise':
        console.log("- Subscription tier influences churn risk: Consider tier-specific retention strategies and value propositions.");
        break;
      default:
        console.log(`- ${feature.feature} is an important factor in predicting churn. Further investigation recommended.`);
    }
  });
  
  // ROI calculation for retention efforts
  const avgCustomerValue = data.reduce((sum, customer) => sum + customer.monthlySpend, 0) / totalCustomers;
  const avgCustomerLifetime = 1 / churnRate; // in months
  const customerLifetimeValue = avgCustomerValue * avgCustomerLifetime;
  
  console.log("\nCustomer Economics:");
  console.log(`Average Monthly Revenue per Customer: $${avgCustomerValue.toFixed(2)}`);
  console.log(`Average Customer Lifetime (months): ${avgCustomerLifetime.toFixed(1)}`);
  console.log(`Customer Lifetime Value: $${customerLifetimeValue.toFixed(2)}`);
  
  // Retention strategy ROI
  const potentialChurnReduction = 0.2; // Assume we can reduce churn by 20% with targeted interventions
  const newChurnRate = churnRate * (1 - potentialChurnReduction);
  const newAvgCustomerLifetime = 1 / newChurnRate;
  const newCustomerLifetimeValue = avgCustomerValue * newAvgCustomerLifetime;
  const valueIncrease = newCustomerLifetimeValue - customerLifetimeValue;
  
  console.log("\nRetention Strategy ROI:");
  console.log(`If churn is reduced by 20%, Customer Lifetime Value increases by $${valueIncrease.toFixed(2)} per customer`);
  console.log(`For a customer base of ${totalCustomers}, this represents $${(valueIncrease * totalCustomers).toFixed(2)} in additional lifetime value`);
}

// Main function to orchestrate the entire process
async function main() {
  console.log("=== Customer Churn Prediction for SaaS Platforms ===\n");
  
  // Generate synthetic data
  const rawData = generateSyntheticData(1000);
  
  // Preprocess data
  const processedData = preprocessData(rawData);
  
  // Engineer features
  const enhancedData = engineerFeatures(processedData);
  
  // Split data
  const { trainData, testData } = splitData(enhancedData);
  console.log(`Training data size: ${trainData.length}`);
  console.log(`Testing data size: ${testData.length}`);
  
  // Normalize data
  const { normalizedTrainData, normalizedTestData } = normalizeData(trainData, testData);
  
  // Prepare data for TensorFlow
  const trainTensors = prepareForTensorflow(normalizedTrainData);
  const testTensors = prepareForTensorflow(normalizedTestData);
  
  // Train logistic regression model
  const logisticModel = await trainLogisticRegression(
    trainTensors.features, 
    trainTensors.labels,
    50
  );
  
  console.log("\n=== Logistic Regression Model ===");
  
  // Evaluate logistic regression model
  const logisticMetrics = await evaluateModel(
    logisticModel,
    testTensors.features,
    testTensors.labels
  );
  
  // Train neural network model
  const nnModel = await trainNeuralNetwork(
    trainTensors.features,
    trainTensors.labels,
    50
  );
  
  console.log("\n=== Neural Network Model ===");
  
  // Evaluate neural network model
  const nnMetrics = await evaluateModel(
    nnModel,
    testTensors.features,
    testTensors.labels
  );
  
  // Determine which model performed better
  const bestModel = logisticMetrics.f1Score > nnMetrics.f1Score ? 
    { model: logisticModel, name: "Logistic Regression" } : 
    { model: nnModel, name: "Neural Network" };
  
  console.log(`\nBest performing model: ${bestModel.name}`);
  
  // Get feature names (excluding the target variable)
  const sampleFeatures = {...normalizedTrainData[0]};
  delete sampleFeatures.churned;
  const featureNames = Object.keys(sampleFeatures);
  
  // Analyze feature importance for the best model
  const featureImportance = await analyzeFeatureImportance(bestModel.model, featureNames);
  
  // Generate business insights
  generateBusinessInsights(normalizedTestData, logisticMetrics, featureImportance);
  
  console.log("\n=== Deployment Considerations ===");
  console.log("1. Implement real-time churn prediction API using TensorFlow.js");
  console.log("2. Create customer risk dashboards for customer success teams");
  console.log("3. Set up automated alerts for high-risk customers");
  console.log("4. Develop targeted intervention strategies based on risk factors");
  console.log("5. Establish a feedback loop to continuously improve the model");
}

// Run the main function
main().catch(error => {
  console.error("An error occurred:", error);
});
