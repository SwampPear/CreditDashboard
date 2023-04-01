import json

def lambda_handler(event, context):
    headers = {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Headers' : 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods' : 'GET',
        'Access-Control-Allow-Credentials' : True,
        'Access-Control-Allow-Origin' : '*',
        'X-Requested-With' : '*'
    }
    
    try:
        data = {
            'Levels': {
                'XData': [
                    'A',
                    'B',
                    'C',
                    'D',
                    'E',
                    'F',
                    'G',
                    'H',
                    'I',
                    'J'
                ],
                'YData': [
                    6399,
                    6329,
                    6353,
                    6350,
                    6344,
                    6352,
                    6424,
                    6325,
                    6326,
                    6843
                ],
                'Source': [],
                'Target': [],
                'Value': []
            },
            'CurrentProducts': {
                'XData': [
                    'Auto (Other)',
                    'BASIC CHECKING',
                    'Business Checking',
                    'Business Credit Card',
                    'Business Home Equity Loan',
                    'Business Line of Credit',
                    'Business Loan',
                    'Business Money Market',
                    'Business Mortgage',
                    'Business Savings',
                    'Certificates',
                    'Charge Off',
                    'Checking (Other)',
                    'Credit Card',
                    'DIVIDEND CHECKING',
                    'Direct Auto',
                    'GO GREEN CHECKING',
                    'HELOC',
                    'HSA',
                    'Home Equity Loan',
                    'IRA',
                    'Indirect Auto',
                    'Line of Credit',
                    'Money Market',
                    'Mortgage (ARM)',
                    'Mortgage (Fixed)',
                    'Mortgage (JUMBO)',
                    'Mortgage (Other)',
                    'Personal Loan',
                    'Savings',
                    'Service'
                ],
                'YData': [
                    2790,
                    685,
                    2895,
                    1453,
                    2101,
                    2088,
                    5475,
                    1427,
                    3500,
                    3409,
                    64080,
                    4108,
                    692,
                    4157,
                    681,
                    6655,
                    697,
                    6058,
                    1422,
                    4857,
                    2761,
                    7375,
                    688,
                    2107,
                    4090,
                    3404,
                    4172,
                    5342,
                    9866,
                    64022,
                    3466
                ],
                'Source': [],
                'Target': [],
                'Value': []
            },
            'PropensityToMoveUp': {
                'XData': [
                    '0-9',
                    '10-19',
                    '20-29',
                    '30-39',
                    '40-49',
                    '50-59',
                    '60-69',
                    '70-79',
                    '80-89',
                    '90-99',
                    '100-109'
                ],
                'YData': [
                    6348,
                    6244,
                    6302,
                    6372,
                    6323,
                    6368,
                    6474,
                    6346,
                    6225,
                    6405,
                    638
                ],
                'Source': [],
                'Target': [],
                'Value': []
            },
            'MemberTenure': {
                'XData': [
                    '0-1',
                    '1-2',
                    '2-3',
                    '3-4',
                    '4+'
                ],
                'YData': [
                    1038,
                    1142,
                    1176,
                    1135,
                    59379
                ],
                'Source': [],
                'Target': [],
                'Value': []
            },
            'LifeStage': {
                'XData': [
                    'Child',
                    'College',
                    'Mature Adult/Family',
                    'Retired',
                    'Teen',
                    'Young Adult/Family'
                ],
                'YData': [
                    6321,
                    12858,
                    12644,
                    6356,
                    12900,
                    12791
                ],
                'Source': [],
                'Target': [],
                'Value': []
            },
            'OriginationChannel': {
                'XData': [
                    'Branch',
                    'Digital',
                    'Indirect'
                ],
                'YData': [
                    16061,
                    15824,
                    31985
                ],
                'Source': [],
                'Target': [],
                'Value': []
            },
            'PreferredChannel': {
                'XData': [
                    'Branch',
                    'Digital',
                    'Indirect'
                ],
                'YData': [
                    16009,
                    16118,
                    31743
                ],
                'Source': [],
                'Target': [],
                'Value': []
            }
        }

        is_success = True
        system_code = 'S100'
        message = 'Metrics'
        details = 'Metrics Found'

        body = {
            'isSuccess': is_success,
            'data': data,
            'systemCode': system_code,
            'message': message,
            'details': details
        }
    
        return {
            'statusCode': 200,
            'headers': json.dumps(headers),
            'body': json.dumps(body)
        }
    
    except:
        is_success = False
        system_code = 'S100'
        message = 'Metrics'
        details = 'Metrics Not Found'

        body = {
            'isSuccess': is_success,
            'systemCode': system_code,
            'message': message,
            'details': details
        }
    
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps(body)
        }
