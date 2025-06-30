
  return { normalizedTrainData, normalizedTestData, sta
}  const normalizedTestData = testData.map(item => {
    const normalized = {...  // Calculate churn rate
  const totalCustomers = data.length;
  const churnedCustomers = data.filter(customer => customer.churned === 1).length;
  const churnRate = churnedCustomers / totalCustomers;

  const churnRate = churnedCustomers / totalCustomers;

      normalized[feature] = (item[feature] - stats[feature].mean) / (stats[feature].std || 1);
    });import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

    });import { pipeline } from 'stream/promises';

  
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
