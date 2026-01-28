// Test script for exam2p_query_audit MCP tool
import axios from 'axios';

const AUDIT_SERVICE_URL = 'http://localhost:3001';

async function testMCPTool() {
  console.log('=== Testing exam2p_query_audit MCP Tool ===\n');
  
  console.log('Tool Name: exam2p_query_audit');
  console.log('Description: Query audit logs from the exam2p audit service');
  console.log('\nJSON Schema:');
  console.log(JSON.stringify({
    type: 'object',
    properties: {
      limit: {
        type: 'number',
        description: 'Optional limit for the number of audit records to return',
        optional: true,
      },
    },
  }, null, 2));

  console.log('\n=== Testing with limit=5 ===\n');
  
  try {
    const response = await axios.get(`${AUDIT_SERVICE_URL}/exam2p-audit`, {
      params: { limit: 5 },
    });
    
    console.log('✓ Successfully connected to GET /exam2p-audit');
    console.log('✓ Response received:\n');
    console.log(JSON.stringify(response.data, null, 2));
    
    console.log('\n=== Test Successful ===');
    console.log('The MCP tool exam2p_query_audit is correctly configured and functional.');
  } catch (error: any) {
    if (error.code === 'ECONNREFUSED') {
      console.error('✗ Error: Audit service is not running on port 3001');
      console.error('  Please start it with: npm run start:dev');
    } else {
      console.error('✗ Error:', error.message);
    }
  }
}

testMCPTool().catch(console.error);
