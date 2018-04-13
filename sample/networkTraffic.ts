export const networkTraffic: any = {
	"nodes": [
		{
			"name": "us-east-1a",
			"group": "us-east-1a",
			"type": "az"
		},
		{
			"name": "us-east-1b",
			"group": "us-east-1b",
			"type": "az"
		},
		{
			"name": "us-east-1c",
			"group": "us-east-1c",
			"type": "az"
		},
		{
			"name": "ip-172-21-113-5.ec2.internal",
			"group": "us-east-1a",
			"type": "node"
		},
		{
			"name": "server2",
			"group": "us-east-1a",
			"type": "node"
		},
		{
			"name": "ip-172-10-113-56.ec2.internal",
			"group": "us-east-1a",
			"type": "node"
		},
		{
			"name": "ip-172-10-113-5.ec2.internal",
			"group": "us-east-1b",
			"type": "node"
		},
		{
			"name": "server5",
			"group": "us-east-1b",
			"type": "node"
		},
		{
			"name": "server6",
			"group": "us-east-1b",
			"type": "node"
		},
		{
			"name": "server7",
			"group": "us-east-1c",
			"type": "node"
		},
		{
			"name": "ip-172-33-113-5.ec2.internal",
			"group": "us-east-1c",
			"type": "node"
		},
		{
			"name": "server9",
			"group": "us-east-1c",
			"type": "node"
		}
	],
	"links": [
		{
			"source": "us-east-1a",
			"target": "us-east-1b",
			"linkType": "az"
		},
		{
			"source": "us-east-1b",
			"target": "us-east-1c",
			"linkType": "az"
		},
		{
			"source": "us-east-1c",
			"target": "us-east-1a",
			"linkType": "az"
		},
		{
			"source": "us-east-1a",
			"target": "ip-172-21-113-5.ec2.internal",
			"linkType": "azn"
		},
		{
			"source": "us-east-1a",
			"target": "server2",
			"linkType": "azn"
		},
		{
			"source": "us-east-1a",
			"target": "ip-172-10-113-56.ec2.internal",
			"linkType": "azn"
		},
		{
			"source": "us-east-1b",
			"target": "ip-172-10-113-5.ec2.internal",
			"linkType": "azn"
		},
		{
			"source": "us-east-1b",
			"target": "server5",
			"linkType": "azn"
		},
		{
			"source": "us-east-1b",
			"target": "server6",
			"linkType": "azn"
		},
		{
			"source": "us-east-1c",
			"target": "server7",
			"linkType": "azn"
		},
		{
			"source": "us-east-1c",
			"target": "ip-172-33-113-5.ec2.internal",
			"linkType": "azn"
		},
		{
			"source": "us-east-1c",
			"target": "server9",
			"linkType": "azn"
		},
		{
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"linkType": "nn"
		},
		{
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"linkType": "nn"
		},
		{
			"source": "server5",
			"target": "server9",
			"linkType": "nn"
		},
		{
			"source": "server2",
			"target": "server6",
			"linkType": "nn"
		},
		{
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"linkType": "nn"
		},
		{
			"source": "server6",
			"target": "server9",
			"linkType": "nn"
		},
		{
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"linkType": "nn"
		},
		{
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"linkType": "nn"
		},
		{
			"source": "server7",
			"target": "server7",
			"linkType": "nn"
		},
		{
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"linkType": "nn"
		},
		{
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"linkType": "nn"
		}
	],
	"hits": [
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740800907,
			"priority": "DEBUG",
			"id": "AV_6xhBdfA7zB0A3drtW"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740801130,
			"priority": "DEBUG",
			"id": "AV_6xhBdfA7zB0A3drtX"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740801486,
			"priority": "REST",
			"id": "AV_6xhBdfA7zB0A3drtY"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:d98d0fc7-5cc7-42ad-8476-54ed268cacc7",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740801509,
			"priority": "DEBUG",
			"id": "AV_6xhBdfA7zB0A3drtZ"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740802157,
			"priority": "DEBUG",
			"id": "AV_6xhBdfA7zB0A3drtc"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740803128,
			"priority": "DEBUG",
			"id": "AV_6xh_BCauC8Nm_iFIv"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740804129,
			"priority": "DEBUG",
			"id": "AV_6xh_BCauC8Nm_iFIw"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740805127,
			"priority": "DEBUG",
			"id": "AV_6xh_BCauC8Nm_iFIx"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740806295,
			"priority": "DEBUG",
			"id": "AV_6xh_BCauC8Nm_iFIy"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740807128,
			"priority": "DEBUG",
			"id": "AV_6xh_BCauC8Nm_iFIz"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740808172,
			"priority": "DEBUG",
			"id": "AV_6xh_BCauC8Nm_iFI0"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740809128,
			"priority": "DEBUG",
			"id": "AV_6xjcyg_InkCeeB39s"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740810163,
			"priority": "DEBUG",
			"id": "AV_6xjcyg_InkCeeB39t"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740811128,
			"priority": "DEBUG",
			"id": "AV_6xjcyg_InkCeeB39u"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740812129,
			"priority": "DEBUG",
			"id": "AV_6xjcyg_InkCeeB39v"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740813413,
			"priority": "DEBUG",
			"id": "AV_6xjcyg_InkCeeB39w"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740813591,
			"priority": "REST",
			"id": "AV_6xkbYtyK4rV5lzigw"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:338ad8ed-7049-404a-b3a8-23b66c6ce12f",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740813607,
			"priority": "DEBUG",
			"id": "AV_6xkbYtyK4rV5lzigx"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740813608,
			"priority": "DEBUG",
			"id": "AV_6xkY8LrJE4-YzFY8z"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740813608,
			"priority": "DEBUG",
			"id": "AV_6xkY8LrJE4-YzFY80"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740814129,
			"priority": "DEBUG",
			"id": "AV_6xjcyg_InkCeeB39x"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740815133,
			"priority": "DEBUG",
			"id": "AV_6xk6kfA7zB0A3drtd"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740816128,
			"priority": "DEBUG",
			"id": "AV_6xk6kfA7zB0A3drte"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740817139,
			"priority": "DEBUG",
			"id": "AV_6xk6kfA7zB0A3drtf"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740817341,
			"priority": "REST",
			"id": "AV_6xkbYtyK4rV5lzig0"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:74d76e9e-a274-49de-b170-bb38eb3c5fad",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740817350,
			"priority": "DEBUG",
			"id": "AV_6xkbYtyK4rV5lzig1"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740818130,
			"priority": "DEBUG",
			"id": "AV_6xk6kfA7zB0A3drtg"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740819132,
			"priority": "DEBUG",
			"id": "AV_6xk6kfA7zB0A3drth"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740820146,
			"priority": "DEBUG",
			"id": "AV_6xk6kfA7zB0A3drti"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740820544,
			"priority": "REST",
			"id": "AV_6xk6kfA7zB0A3drtj"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:63c72d99-ee8a-4aa7-acd5-c0399960f617",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740820557,
			"priority": "DEBUG",
			"id": "AV_6xk6kfA7zB0A3drtk"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740820607,
			"priority": "REST",
			"id": "AV_6xmEng_InkCeeB39y"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:73a2f82b-319a-4f48-acc4-2fa5ba124990",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740820616,
			"priority": "DEBUG",
			"id": "AV_6xmEng_InkCeeB39z"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740821131,
			"priority": "DEBUG",
			"id": "AV_6xmY3CauC8Nm_iFI1"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740822153,
			"priority": "DEBUG",
			"id": "AV_6xmY3CauC8Nm_iFI2"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740823129,
			"priority": "DEBUG",
			"id": "AV_6xmY3CauC8Nm_iFI3"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824307,
			"priority": "DEBUG",
			"id": "AV_6xmY3CauC8Nm_iFI4"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740824564,
			"priority": "REST",
			"id": "AV_6xnFatyK4rV5lzig6"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740824564,
			"priority": "DEBUG",
			"id": "AV_6xnFatyK4rV5lzig5"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740824564,
			"priority": "DEBUG",
			"id": "AV_6xnFatyK4rV5lzig4"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824570,
			"priority": "REST",
			"id": "AV_6xmY3CauC8Nm_iFI5"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824587,
			"priority": "DEBUG",
			"id": "AV_6xmY3CauC8Nm_iFI7"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824587,
			"priority": "REST",
			"id": "AV_6xmY3CauC8Nm_iFI8"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824587,
			"priority": "DEBUG",
			"id": "AV_6xmY3CauC8Nm_iFI6"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824602,
			"priority": "REST",
			"id": "AV_6xmY3CauC8Nm_iFI9"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824609,
			"priority": "DEBUG",
			"id": "AV_6xmY3CauC8Nm_iFI-"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824609,
			"priority": "DEBUG",
			"id": "AV_6xmY3CauC8Nm_iFI_"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824614,
			"priority": "DEBUG",
			"id": "AV_6xmY3CauC8Nm_iFJA"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824615,
			"priority": "REST",
			"id": "AV_6xmY3CauC8Nm_iFJD"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824617,
			"priority": "DEBUG",
			"id": "AV_6xmY3CauC8Nm_iFJE"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740824618,
			"priority": "REST",
			"id": "AV_6xnFatyK4rV5lzig7"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740824619,
			"priority": "REST",
			"id": "AV_6xnFatyK4rV5lzig8"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824623,
			"priority": "INFO",
			"id": "AV_6xnHBLrJE4-YzFY82"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824627,
			"priority": "REST",
			"id": "AV_6xnHBLrJE4-YzFY83"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824913,
			"priority": "INFO",
			"id": "AV_6xnHBLrJE4-YzFY85"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824913,
			"priority": "REST",
			"id": "AV_6xnHBLrJE4-YzFY84"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824913,
			"priority": "INFO",
			"id": "AV_6xnHBLrJE4-YzFY86"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824914,
			"priority": "INFO",
			"id": "AV_6xnHBLrJE4-YzFY87"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824914,
			"priority": "REST",
			"id": "AV_6xnHBLrJE4-YzFY88"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:fe8b7501-296c-4847-af49-4280c53f2577",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824957,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9O"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:fe8b7501-296c-4847-af49-4280c53f2577",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824984,
			"priority": "REST",
			"id": "AV_6xmEng_InkCeeB392"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:fe8b7501-296c-4847-af49-4280c53f2577",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824989,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9P"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:fe8b7501-296c-4847-af49-4280c53f2577",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740824989,
			"priority": "DEBUG",
			"id": "AV_6xmEng_InkCeeB393"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824990,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9S"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824990,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9Q"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824990,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9R"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740824993,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9T"
		},
		{
			"requestId": "emailContacts:5509a223-ba88-4b17-9bac-e09c79d83b02",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825303,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9V"
		},
		{
			"requestId": "emailContacts:5509a223-ba88-4b17-9bac-e09c79d83b02",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740825307,
			"priority": "REST",
			"id": "AV_6xmEng_InkCeeB396"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825315,
			"priority": "REST",
			"id": "AV_6xnHBLrJE4-YzFY89"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825316,
			"priority": "REST",
			"id": "AV_6xnHBLrJE4-YzFY9A"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825316,
			"priority": "INFO",
			"id": "AV_6xnHBLrJE4-YzFY8-"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825316,
			"priority": "INFO",
			"id": "AV_6xnHBLrJE4-YzFY8_"
		},
		{
			"requestId": "emailContacts:5509a223-ba88-4b17-9bac-e09c79d83b02",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740825318,
			"priority": "DEBUG",
			"id": "AV_6xmEng_InkCeeB397"
		},
		{
			"requestId": "emailContacts:5509a223-ba88-4b17-9bac-e09c79d83b02",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825319,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9W"
		},
		{
			"requestId": "emailContacts:5509a223-ba88-4b17-9bac-e09c79d83b02",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825319,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9X"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:b4cd0d12-7fa5-45e2-b2cf-bbf786c3031a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825369,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9Y"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:b4cd0d12-7fa5-45e2-b2cf-bbf786c3031a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740825370,
			"priority": "REST",
			"id": "AV_6xmEng_InkCeeB39-"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:b4cd0d12-7fa5-45e2-b2cf-bbf786c3031a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740825376,
			"priority": "DEBUG",
			"id": "AV_6xmEng_InkCeeB39_"
		},
		{
			"requestId": "eventMilestoneDate:41f73ba3-e8f2-4bd6-adbc-549f2a255590",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825377,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9b"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:b4cd0d12-7fa5-45e2-b2cf-bbf786c3031a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825377,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9Z"
		},
		{
			"requestId": "eventMilestoneDate:41f73ba3-e8f2-4bd6-adbc-549f2a255590",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825377,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9a"
		},
		{
			"requestId": "eventMilestoneDate:41f73ba3-e8f2-4bd6-adbc-549f2a255590",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825378,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9c"
		},
		{
			"requestId": "eventMilestoneDate:41f73ba3-e8f2-4bd6-adbc-549f2a255590",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825380,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9d"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:015848f5-ed65-429d-9f31-761fe86952fa",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825422,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9e"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:015848f5-ed65-429d-9f31-761fe86952fa",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740825423,
			"priority": "REST",
			"id": "AV_6xmEng_InkCeeB3-C"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:c6aa79a9-a28c-4777-9c36-e8b3b3eaa4c7",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740825426,
			"priority": "DEBUG",
			"id": "AV_6xmY3CauC8Nm_iFJH"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:015848f5-ed65-429d-9f31-761fe86952fa",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740825430,
			"priority": "DEBUG",
			"id": "AV_6xmEng_InkCeeB3-D"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:015848f5-ed65-429d-9f31-761fe86952fa",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825431,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9f"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825431,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9g"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825431,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9h"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825432,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9i"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825434,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9j"
		},
		{
			"requestId": "no-request-id",
			"source": "server7",
			"target": "server7",
			"timestamp": 1511740825513,
			"priority": "DEBUG",
			"id": "AV_6xnVsfA7zB0A3drtp"
		},
		{
			"requestId": "no-request-id",
			"source": "server7",
			"target": "server7",
			"timestamp": 1511740825513,
			"priority": "REST",
			"id": "AV_6xnVsfA7zB0A3drtn"
		},
		{
			"requestId": "no-request-id",
			"source": "server7",
			"target": "server7",
			"timestamp": 1511740825513,
			"priority": "REST",
			"id": "AV_6xnVsfA7zB0A3drto"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825588,
			"priority": "REST",
			"id": "AV_6xnHBLrJE4-YzFY9B"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740825590,
			"priority": "REST",
			"id": "AV_6xnFatyK4rV5lzig9"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740825591,
			"priority": "DEBUG",
			"id": "AV_6xnFatyK4rV5lzig-"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740825592,
			"priority": "DEBUG",
			"id": "AV_6xnFatyK4rV5lzig_"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740825593,
			"priority": "REST",
			"id": "AV_6xnFatyK4rV5lzihA"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740825594,
			"priority": "REST",
			"id": "AV_6xmY3CauC8Nm_iFJI"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740825602,
			"priority": "DEBUG",
			"id": "AV_6xmY3CauC8Nm_iFJJ"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740825603,
			"priority": "DEBUG",
			"id": "AV_6xnFatyK4rV5lzihD"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740825603,
			"priority": "DEBUG",
			"id": "AV_6xnFatyK4rV5lzihC"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740825603,
			"priority": "REST",
			"id": "AV_6xnFatyK4rV5lzihB"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740825604,
			"priority": "DEBUG",
			"id": "AV_6xnFatyK4rV5lzihE"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:15d32b8b-00f5-47f0-ba87-f1be727854b2",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740825607,
			"priority": "DEBUG",
			"id": "AV_6xnFatyK4rV5lzihF"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825709,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9k"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825709,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9m"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825709,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9l"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825710,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9o"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825710,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9n"
		},
		{
			"requestId": "eventMilestoneDate:41f73ba3-e8f2-4bd6-adbc-549f2a255590",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825873,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9t"
		},
		{
			"requestId": "eventMilestoneDate:41f73ba3-e8f2-4bd6-adbc-549f2a255590",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825873,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9s"
		},
		{
			"requestId": "eventMilestoneDate:41f73ba3-e8f2-4bd6-adbc-549f2a255590",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825873,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9p"
		},
		{
			"requestId": "eventMilestoneDate:41f73ba3-e8f2-4bd6-adbc-549f2a255590",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825873,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9q"
		},
		{
			"requestId": "eventMilestoneDate:41f73ba3-e8f2-4bd6-adbc-549f2a255590",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825873,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9r"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825933,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9u"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825933,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9x"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825933,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9v"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825933,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9y"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825933,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9w"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825967,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9z"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825967,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD91"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740825967,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD90"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740826126,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIT"
		},
		{
			"requestId": "eventMilestoneDate:41f73ba3-e8f2-4bd6-adbc-549f2a255590",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826185,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD93"
		},
		{
			"requestId": "eventMilestoneDate:41f73ba3-e8f2-4bd6-adbc-549f2a255590",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826185,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD92"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826206,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD94"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826206,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD95"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826206,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD96"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826440,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD97"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826441,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD9_"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826441,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD99"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826441,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD9-"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826441,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD98"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826567,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-B"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826567,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-A"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826567,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-C"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826568,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-E"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826568,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-D"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826638,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-F"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826638,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-G"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826638,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-H"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740826639,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEIU"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740826661,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEIV"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740826661,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIW"
		},
		{
			"requestId": "tradingEntity:14fac951-d28c-45fb-b293-e142a5313984",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826662,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-I"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826663,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-L"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826724,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-N"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826724,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-M"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740826725,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEIY"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826725,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-O"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826743,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-P"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740826743,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEIZ"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:347934e1-6685-4235-b792-4089709a8b42",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740826743,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIa"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826972,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-S"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826972,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-R"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826972,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-U"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826972,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-Q"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740826972,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-T"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827180,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIc"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827213,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-W"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827213,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-V"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827214,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-X"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827214,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-Y"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827377,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-b"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827377,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-c"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827377,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-a"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827377,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-Z"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827378,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEId"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827383,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIe"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827384,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-d"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827384,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-e"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827385,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEIh"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827388,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIi"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827388,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIk"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827388,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIj"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827390,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-f"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827390,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIl"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827390,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-g"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827391,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEIo"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827391,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-h"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827396,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIp"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827397,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-i"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827397,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-j"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827398,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEIs"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827402,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIu"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827402,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIv"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827402,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIt"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827403,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEIw"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827404,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-l"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827404,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-m"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827404,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-k"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827405,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEIz"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827410,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEI0"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827411,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-o"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827411,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-n"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827412,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEI3"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827415,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEI6"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827415,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEI4"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827415,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEI5"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827416,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEI7"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827417,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-q"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827417,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-r"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827417,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-p"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827417,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEI-"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827422,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEI_"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827423,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-s"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827423,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-t"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827423,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEJC"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827427,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJD"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827427,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJE"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827427,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJF"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827428,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJG"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827429,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-u"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827429,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-v"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827429,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEJJ"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827429,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-w"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827435,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJK"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827436,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-y"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827436,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-x"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827437,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEJN"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827440,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJO"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827440,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJQ"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827440,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJP"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827441,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJR"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827442,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-z"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827442,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-0"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827442,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-1"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827443,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEJU"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827448,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJV"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827449,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-2"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827449,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-3"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827449,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEJY"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827453,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJZ"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827453,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJb"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827453,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJa"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827454,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJc"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827455,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-4"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827455,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD-5"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827455,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-6"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827456,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEJf"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827461,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJg"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827462,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-8"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827462,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEJj"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827462,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-7"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827466,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJk"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827466,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJm"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827466,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJl"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740827467,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJn"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827468,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD-9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827468,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_B"
		},
		{
			"requestId": "agreementType:5054a7cc-d59c-42a7-a0ea-51632e8392e2",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827468,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD--"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827698,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_D"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827698,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_G"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827698,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_C"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827698,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_E"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827698,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_F"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827920,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_H"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827949,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_K"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827949,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_I"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740827949,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_J"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828191,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_L"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828221,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_M"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828221,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_N"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828222,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_O"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828456,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_P"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828485,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_R"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828485,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_Q"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828485,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_S"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828551,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_V"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828551,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_T"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828551,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_U"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828552,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_W"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828553,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEJq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828558,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828559,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_Y"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828559,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_X"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828560,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEJu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828563,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828563,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828563,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828564,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828565,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_c"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828565,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_a"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828565,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_b"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828565,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_Z"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828566,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEJ1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828571,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJ2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828572,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEJ5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828572,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_d"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828572,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_e"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828576,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJ8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828576,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJ7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828576,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJ6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828577,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEJ9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828578,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_g"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828578,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_h"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828578,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_i"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828578,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_f"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828579,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEKA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828584,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828585,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_k"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828585,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEKE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828585,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_j"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828588,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828588,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828588,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828590,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_m"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828590,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_n"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828590,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_l"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828590,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828591,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEKL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828591,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_o"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828597,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828597,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_p"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828597,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_q"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828598,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEKP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828601,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828601,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828601,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828603,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_s"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828603,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_t"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828603,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_u"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828603,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828603,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_r"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828604,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEKW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828610,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828610,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_w"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828610,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_v"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828611,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEKa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828614,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828614,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828614,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828616,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_x"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828616,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828617,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEKh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828617,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_y"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828617,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_z"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828617,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828623,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828623,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828623,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828624,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEKl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828627,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828627,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828627,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828628,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828629,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828629,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828629,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEKs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828629,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828629,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828634,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828635,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828635,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828636,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEKw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828639,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828639,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828639,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEKx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828640,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEK0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828641,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828641,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiD_9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828641,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD_-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828641,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiD__"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828642,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEK3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828647,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEK4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828648,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828648,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828648,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEK7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828652,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEK-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828652,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEK8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828652,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEK9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828653,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEK_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828654,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828654,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828654,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828654,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828655,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiELC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828660,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828660,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828660,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828661,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiELG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828664,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828664,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828664,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828666,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828666,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828666,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828666,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828666,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828667,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiELN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828673,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828674,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiELR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828674,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828674,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828677,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828677,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828677,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828679,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828679,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828679,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828679,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828679,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828680,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiELY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828685,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828686,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiELc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828686,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828686,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828690,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828690,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828690,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828691,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828692,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828692,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828692,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828692,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiELj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828692,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828698,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828699,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828699,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828699,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiELn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828702,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828702,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828702,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828704,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828705,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828705,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiELu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828705,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828705,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828705,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828711,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828711,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828711,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828712,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiELy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828715,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEL0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828715,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiELz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828715,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEL1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828716,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEL2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828717,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828717,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828717,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828717,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEL5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828717,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828722,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEL6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828723,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEL9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828723,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828723,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828726,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828726,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEL-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828726,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEL_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828728,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828729,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEME"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828729,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828729,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828729,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828729,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828735,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828735,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828735,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828736,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEMI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828740,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828740,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828740,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEML"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828742,
			"priority": "DEBUG",
			"id": "AV_6xoGFg_InkCeeB3-H"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828742,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828743,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828743,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828743,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEAu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828743,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828744,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEMP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828751,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828752,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828752,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEMT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828752,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828755,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828755,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828755,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828759,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEA2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828759,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEAz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828759,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEA0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828759,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEA1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828759,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828760,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEMa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828766,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828767,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEA3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828767,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEA4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828768,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEMe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828771,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828771,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828771,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828773,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828773,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEA5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828774,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEA8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828774,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEMl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828774,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEA7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828774,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEA6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828779,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828780,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEA-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828780,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEA9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828781,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEMp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828784,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828784,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828784,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828785,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828786,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828786,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEA_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828786,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828786,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828787,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEMw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828792,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEMx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828793,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828793,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828794,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEM0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828798,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEM1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828798,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEM3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828798,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEM2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828799,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEM4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828800,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828800,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828800,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828800,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEM7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828800,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828806,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828806,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEM8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828806,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828807,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEM_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828810,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828810,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828810,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828812,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEND"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828813,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828813,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828813,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828813,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828814,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiENG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828819,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828819,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828819,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828820,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiENK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828823,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828823,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828823,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828824,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828825,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828825,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828825,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828825,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828826,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiENR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828831,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828832,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828832,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiENV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828832,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828836,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828836,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828836,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828837,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828837,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828838,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828838,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828838,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828838,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiENc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828843,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828844,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828844,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828845,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiENg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828848,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828848,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828848,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828849,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828850,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828850,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828850,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828850,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828851,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiENn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828856,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828856,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828856,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828857,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiENr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828860,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828860,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828860,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828862,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828862,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828862,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828862,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828862,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828863,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiENy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828868,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiENz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828869,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828869,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828869,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEN2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828872,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEN5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828872,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEN3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828872,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEN4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828874,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEN6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828875,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828875,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828875,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828875,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEN9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828875,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828880,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEN-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828881,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828881,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828882,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEOB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828885,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828885,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828885,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828886,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828887,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828887,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828887,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828887,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEOI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828887,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEBx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828892,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828893,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEBz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828893,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEB0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828894,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEOM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828897,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEON"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828897,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828897,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828898,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828899,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEB4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828899,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEB1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828899,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEB2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828899,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEB3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828899,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEOT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828904,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828905,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEB6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828905,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEB5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828905,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEOX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828908,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828908,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828908,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828910,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828910,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEB9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828910,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEB7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828910,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEB8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828910,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEB-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828911,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEOe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828916,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828916,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEB_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828917,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828917,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEOi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828920,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828920,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828920,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828922,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828922,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828922,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828922,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828922,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828923,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEOp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828928,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828928,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828928,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828929,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEOt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828932,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828932,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828932,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828933,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEOx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828934,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEO0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828934,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828934,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828934,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828934,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828939,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEO1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828940,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828940,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828941,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEO4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828943,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEO5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828943,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEO7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828943,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEO6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828945,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEO8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828946,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828946,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828946,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEO_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828946,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828946,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828952,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828952,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828952,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828953,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEPD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828956,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828956,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828956,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828957,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828958,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828958,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828958,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828958,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828959,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEPK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828963,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828964,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828964,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828965,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEPO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828968,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828968,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828968,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828969,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828969,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828969,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828970,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEPV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828970,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828970,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828975,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828976,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEPZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828976,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828976,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828980,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828980,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828980,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828981,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828981,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828981,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828981,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828981,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828982,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEPg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828987,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828988,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEPk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828988,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828988,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828992,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828992,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828992,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828993,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828994,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828994,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828994,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740828994,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828994,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEPr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740828999,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829000,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829000,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEPv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829000,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829004,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829004,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829004,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829005,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEPz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829006,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829006,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829006,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829006,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829007,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEP2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829012,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEP3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829013,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829013,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829014,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEP6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829017,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEP8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829017,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEP9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829017,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEP7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829018,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEP-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829019,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829019,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEC0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829019,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiECz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829019,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiECx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829020,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEQB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829025,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829026,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEC1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829026,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEC2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829026,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEQF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829030,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829030,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829030,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829031,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829032,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEQM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829032,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEC4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829032,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEC6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829032,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEC3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829032,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEC5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829037,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829038,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEC8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829038,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEC7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829039,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEQQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829042,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829042,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829042,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829043,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829044,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEC-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829044,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEC9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829044,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEC_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829044,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829045,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEQX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829050,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829051,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEaz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829051,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829052,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEQb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829055,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829055,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829055,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829056,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829057,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829057,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829057,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829057,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEQi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829057,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829063,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829063,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829063,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829064,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEQm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829067,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829067,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829067,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829069,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829069,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829069,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829069,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829070,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829070,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEQt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829075,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829076,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEazn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829076,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829076,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEQx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829080,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829080,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829080,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQ0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829081,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQ1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829082,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829082,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829082,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829082,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829083,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEQ4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829088,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQ5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829088,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829089,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEQ8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829089,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829092,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQ9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829092,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQ_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829092,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEQ-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829094,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829095,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829095,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829095,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829095,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiERD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829095,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829101,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829101,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829101,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829103,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiERH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829106,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829106,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829106,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829108,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829108,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829108,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829108,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829108,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEaz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829109,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiERO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829115,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829115,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829115,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829116,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiERS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829120,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829120,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829120,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERV"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829121,
			"priority": "DEBUG",
			"id": "AV_6xoGFg_InkCeeB3-I"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829122,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829122,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829122,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829122,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829122,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829123,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiERZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829130,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829130,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829130,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829131,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiERd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829134,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829134,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829134,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829136,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829136,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEazn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829137,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829137,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829137,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiERk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829137,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829143,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829143,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829143,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829144,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiERo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829147,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829147,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829147,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829148,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829149,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829149,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiERv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829149,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829149,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829149,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEDu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829155,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829155,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiERw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829155,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829156,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiERz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829159,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiER1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829159,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiER2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829159,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiER0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829160,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiER3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829161,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiED1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829161,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiED0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829161,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEDz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829161,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiED2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829162,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiER6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829167,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiED3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829167,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiER7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829167,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiED4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829168,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiER-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829171,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829171,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiER_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829171,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829172,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829173,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiED6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829173,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiED5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829173,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiED8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829173,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiED7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829174,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiESF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829178,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829179,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiED-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829179,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiED9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829180,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiESJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829183,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829183,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829183,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829185,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829185,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiED_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829185,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829185,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829186,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiESQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829186,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829192,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829192,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEED"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829192,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829193,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiESU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829196,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829196,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829196,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829197,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829198,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829198,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829198,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829198,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829199,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiESb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829204,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829204,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829204,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829206,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiESf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829209,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829209,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829209,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829210,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829211,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829211,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829211,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829211,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiESm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829211,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829216,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829217,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829217,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829218,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiESq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829221,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829221,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829221,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829222,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829223,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEER"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829223,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEES"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829223,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiESx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829223,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEET"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829223,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829228,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiESy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829229,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829229,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829230,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiES1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829233,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiES2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829233,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiES4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829233,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiES3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829234,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiES5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829235,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829235,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829235,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829235,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829236,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiES8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829241,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiES9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829241,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829241,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829242,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiETA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829245,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829245,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829245,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829246,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829247,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829247,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829247,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829247,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829248,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiETH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829253,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829253,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829253,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829254,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiETL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829257,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829257,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829257,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829258,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829259,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829259,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829259,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829259,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829260,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiETS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829265,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829265,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829265,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829266,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiETW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829269,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829269,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829269,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829270,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829271,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiETd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829271,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829271,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829271,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829271,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829277,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829277,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829277,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829278,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiETh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829281,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829281,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829281,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829282,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829283,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829283,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiETo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829283,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEEw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829283,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829283,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829289,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829289,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEEz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829289,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEE0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829290,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiETs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829292,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829292,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829292,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829294,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEE1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829294,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiETw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829294,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEE3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829294,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEE2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829295,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiETz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829295,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEE4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829300,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiET0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829301,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiET3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829301,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEE6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829301,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEE5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829304,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiET4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829304,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiET5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829304,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiET6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829306,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiET7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829306,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEE9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829306,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEE7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829306,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEE8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829307,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiET-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829307,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEE-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829312,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiET_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829313,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEUC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829313,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEFA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829313,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEE_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829318,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829318,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829318,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829319,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829320,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEFC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829320,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEFD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829320,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEUJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829320,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEFB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829320,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEFE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829325,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829326,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEFF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829326,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEUN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829326,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEFG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829329,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829329,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829329,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829331,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEFH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829331,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEFI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829331,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829331,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEFJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829332,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEUU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829332,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEFK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829337,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEFL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829337,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEFM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829337,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829338,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEUY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829341,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829341,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829341,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829342,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829343,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEFN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829343,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEUf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829343,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEFP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829343,
			"priority": "INFO",
			"id": "AV_6xnC08I0yF8eIiEFO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829343,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEFQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829348,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829349,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829349,
			"priority": "REST",
			"id": "AV_6xnC08I0yF8eIiEFR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829350,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEUj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829353,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829353,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829353,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829354,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829354,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829354,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEFV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829354,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829354,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEFU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829355,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEUq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829360,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829360,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829361,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEUu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829361,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829364,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829364,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829364,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829365,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEUy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829366,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEFa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829366,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829366,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEFb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829366,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829367,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEU1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829372,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEU2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829372,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829372,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829373,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEU5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829376,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEU6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829376,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEU7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829376,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEU8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829377,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEU9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829378,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEVA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829378,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEFg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829378,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEFh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829378,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829378,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829383,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829384,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829384,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEVE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829384,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829387,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829387,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829387,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829389,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829389,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829390,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEFn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829390,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEVL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829390,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEFm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829390,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829395,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829396,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEVP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829396,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829396,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829399,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829399,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829399,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829401,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEFt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829401,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829401,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEFs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829401,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829401,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829402,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEVW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829407,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829407,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829407,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829408,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEVa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829411,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829411,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829411,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829412,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829413,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEFy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829413,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEFz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829413,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEF0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829413,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEFx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829414,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEVh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829419,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829419,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEF2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829419,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEF1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829420,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEVl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829423,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829423,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829423,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829424,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829425,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEF5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829425,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEF4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829425,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEF6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829425,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEF3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829426,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEVs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829431,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829431,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEF7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829431,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEF8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829432,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEVw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829435,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829435,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829435,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEVz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829436,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEV0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829436,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEF9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829436,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEF_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829436,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEF-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829437,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829437,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEV3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829442,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEV4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829443,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829443,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEV7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829443,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829446,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEV8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829446,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEV9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829446,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEV-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829448,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEV_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829448,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829448,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829448,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829448,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829449,
			"priority": "REST",
			"id": "AV_6xnl_8I0yF8eIiEWC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829455,
			"priority": "DEBUG",
			"id": "AV_6xnl_8I0yF8eIiEWD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829455,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829456,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEWG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829456,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829459,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829459,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829459,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829461,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829462,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829462,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEWN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829462,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829462,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829462,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829468,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829468,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829468,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829469,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEWR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829472,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829472,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829472,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829473,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829474,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829474,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829474,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829474,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829474,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEWY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829479,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829480,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829480,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829481,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEWc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829483,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829483,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829483,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829485,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829485,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829486,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEWj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829486,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829486,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829486,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829491,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829492,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829492,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829492,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEWn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829496,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829496,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829496,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829497,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829498,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829498,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829498,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829498,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829498,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEWu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829503,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829504,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEWy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829504,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829504,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829507,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEWz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829507,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEW1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829507,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEW0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829509,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEW2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829509,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829509,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829509,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829509,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829510,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEW5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829515,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829515,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEW6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829515,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829516,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEW9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829519,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEW_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829519,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829519,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEW-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829520,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829521,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829521,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829521,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829521,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829522,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEXE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829527,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829528,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829528,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829529,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEXI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829532,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829532,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829532,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829533,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829534,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829534,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829534,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829534,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEGv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829535,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEXP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829540,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829540,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829540,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829541,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEXT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829544,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829544,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829544,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829545,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829546,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEXa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829546,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEG0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829546,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEG1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829546,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEGz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829546,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEG2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829551,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829552,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEG3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829552,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEG4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829553,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEXe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829556,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829556,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829556,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829558,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829559,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEG6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829559,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEXl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829559,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEG8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829559,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEG5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829559,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEG7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829565,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEG9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829565,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEG-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829565,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829566,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEXp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829569,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829569,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829569,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829570,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829571,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEG_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829571,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829571,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829571,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829572,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEXw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829577,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829577,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEXx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829577,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829578,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEX0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829581,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEX1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829581,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEX2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829581,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEX3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829582,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEX4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829583,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829584,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829584,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829584,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829584,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEX7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829590,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEX8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829590,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829590,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829591,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEX_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829594,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829594,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829594,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829595,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829595,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829596,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829596,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEYG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829596,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829596,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829601,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829601,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829601,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829602,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEYK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829605,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829605,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829605,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829606,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829607,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829607,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829607,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEYR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829607,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829607,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829613,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829613,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829613,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829614,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEYV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829617,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829617,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829617,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829618,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829619,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829619,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829619,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829619,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829620,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEYc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829625,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829625,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829625,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829626,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEYg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829629,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829629,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829629,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829630,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829631,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829631,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829631,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829631,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829632,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEYn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829637,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829637,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829638,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829638,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEYr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829642,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829642,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829642,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829643,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829643,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829644,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829644,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829644,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEYy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829644,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829650,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEYz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829650,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829650,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829651,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEY2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829654,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEY3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829654,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEY4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829654,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEY5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829655,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEY6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829656,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829656,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829656,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEY9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829656,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829656,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829661,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEY-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829662,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829662,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829663,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEZB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829666,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829666,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829666,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829668,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829668,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829669,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829669,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829669,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEZI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829669,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEHx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829675,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829675,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEHz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829675,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEH0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829676,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEZM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829679,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829679,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829679,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829680,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829681,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEZT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829681,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEH1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829681,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEH3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829681,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEH4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829681,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEH2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829687,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829688,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEH5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829688,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEH6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829688,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEZX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829691,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829691,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829691,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829693,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEH-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829693,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829693,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEH7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829693,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEH8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829693,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEH9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829694,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEZe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829699,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829700,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829700,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEH_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829701,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEZi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829704,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829704,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829704,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829705,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829706,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829706,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829706,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEIC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829706,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEID"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829707,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEZp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829712,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829713,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829713,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829714,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEZt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829717,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829717,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829717,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829718,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829719,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEII"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829719,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEIJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829719,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829719,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEZ0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829719,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829725,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829725,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829725,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZ1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829726,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEZ4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829729,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZ7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829729,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZ5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829729,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZ6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829730,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEZ8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829731,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829731,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEIP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829731,
			"priority": "INFO",
			"id": "AV_6xnC18I0yF8eIiEIO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829731,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829732,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEZ_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829737,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829737,
			"priority": "REST",
			"id": "AV_6xnC18I0yF8eIiEIR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829737,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829738,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEaD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829741,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829741,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829741,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829743,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9E"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829743,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9F"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829743,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829743,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9D"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829744,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9G"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829749,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEaK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829755,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829756,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9I"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829756,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEaO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829756,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9H"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829759,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829759,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829759,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829761,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9M"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829761,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9L"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829761,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829761,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9J"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829761,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9K"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829762,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEaV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829767,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829768,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9N"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829768,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEaZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829768,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9O"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829771,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829771,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEac"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829771,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEab"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829773,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEad"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829774,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9P"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829774,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9S"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829774,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEag"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829774,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9Q"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829774,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9R"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829779,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEah"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829780,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEak"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829780,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9U"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829780,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9T"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829784,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEal"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829784,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEan"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829784,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEam"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829785,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEao"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829786,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9Y"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829786,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9W"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829786,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9V"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829786,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9X"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829786,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEar"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829792,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEas"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829792,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9Z"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829792,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9a"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829793,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEav"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829796,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829796,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEax"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829796,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEay"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829797,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829798,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9c"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829798,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9d"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829798,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9b"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829798,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9e"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829799,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEa2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829804,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEa3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829804,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9f"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829804,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9g"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829805,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEa6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829808,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEa7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829808,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEa8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829808,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEa9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829809,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEa-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829810,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9k"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829810,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9h"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829810,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9j"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829810,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEbB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829810,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9i"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829816,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9l"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829816,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829816,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9m"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829817,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEbF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829821,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829821,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829821,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829823,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829824,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9n"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829824,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9o"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829824,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9q"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829824,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9p"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829824,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEbM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829829,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829830,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEbQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829830,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9s"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829830,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9r"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829834,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829834,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829834,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829835,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9t"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829835,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829836,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9w"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829836,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9u"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829836,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEbX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829836,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY9v"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829841,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829842,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9x"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829842,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEbb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829842,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9y"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829845,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829845,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829845,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829847,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829848,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9z"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829848,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY90"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829848,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY92"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829848,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEbi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829848,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY91"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829853,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829854,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEbm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829854,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY93"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829854,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY94"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829857,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829857,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829857,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829859,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829860,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY97"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829860,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY98"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829860,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEbt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829860,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY96"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829860,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY95"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829865,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829866,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEbx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829866,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY99"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829866,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829869,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEby"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829869,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEbz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829869,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEb0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829871,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-A"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829871,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEb1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829871,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY9_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829871,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-B"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829871,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-C"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829872,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEb4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829877,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEb5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829878,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-D"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829878,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEb8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829878,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-E"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829881,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEb9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829881,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEb-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829881,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEb_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829883,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-F"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829883,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-G"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829883,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829883,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-H"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829884,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEcD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829884,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-I"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829889,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829890,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-J"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829890,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-K"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829891,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEcH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829894,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829894,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829894,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829895,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829896,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-O"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829896,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-N"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829896,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-M"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829896,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-L"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829897,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEcO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829902,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829903,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-P"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829903,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-Q"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829904,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEcS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829907,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829907,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829907,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829909,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-R"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829909,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-U"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829909,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-S"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829909,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829909,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-T"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829910,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEcZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829916,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-W"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829916,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-V"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829916,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEca"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829917,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEcd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829920,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEce"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829920,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829920,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829922,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-X"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829922,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEch"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829922,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-Y"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829922,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-Z"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829922,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-a"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829923,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEck"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829929,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-b"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829929,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829929,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-c"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829930,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEco"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829934,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829934,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829934,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829936,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-f"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829936,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829936,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-e"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829936,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-d"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829936,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-g"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829937,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEcv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829942,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEcw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829943,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEcz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829943,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-h"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829943,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-i"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829946,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEc1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829946,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEc0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829946,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEc2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829948,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEc3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829949,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEc6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829949,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-k"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829949,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-j"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829949,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-l"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829949,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-m"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829955,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-o"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829955,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEc7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829955,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-n"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829956,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEc-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829959,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829959,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829959,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEc_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829961,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829961,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-q"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829961,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-r"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829961,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-s"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829961,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-p"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829962,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEdF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829967,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829968,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-u"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829968,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEdJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829968,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-t"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829971,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829971,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829971,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829973,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEazn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829974,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEdQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829974,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-v"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829974,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-x"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829974,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-w"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829974,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-y"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829980,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829980,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829980,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-z"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829981,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEdU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829984,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829984,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829984,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829986,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829986,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829986,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829986,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829986,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829987,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEdb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829992,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEaz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829993,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829993,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829994,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEdf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829997,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829997,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829997,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829998,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829999,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829999,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY--"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740829999,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEdm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829999,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY-8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740829999,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830058,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEazn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830059,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEdq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830059,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_A"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830059,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY-_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830063,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830063,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830063,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEds"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830065,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830066,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_B"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830066,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_C"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830066,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEdx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830066,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_D"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830066,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_E"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830072,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEdy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830072,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_F"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830072,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_G"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830073,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEd1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830076,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEd3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830076,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEd4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830076,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEd2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830078,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEd5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830078,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_H"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830079,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_I"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830079,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_K"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830079,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEd8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830079,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_J"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830085,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_M"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830085,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_L"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830085,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEd9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830086,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEeA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830089,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830089,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830089,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830091,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830091,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_P"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830091,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_N"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830091,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_Q"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830091,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_O"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830092,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEeH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830097,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830098,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_R"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830098,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_S"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830099,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEeL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830103,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830103,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830103,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830105,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830106,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_V"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830106,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_U"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830106,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEeS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830106,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_T"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830106,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_W"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830113,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830114,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_Y"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830114,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEeW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830114,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_X"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830118,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830118,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830118,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830120,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_Z"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830120,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEea"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830120,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_a"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830120,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_b"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830121,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_c"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830121,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEed"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830122,
			"priority": "DEBUG",
			"id": "AV_6xoGFg_InkCeeB3-J"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830128,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEee"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830128,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_d"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830128,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_e"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830129,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEeh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830132,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEei"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830132,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEej"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830132,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEek"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830134,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEel"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830135,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_i"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830135,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEeo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830135,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_f"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830135,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_g"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830135,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_h"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830141,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_j"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830141,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEep"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830141,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_k"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830142,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEes"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830145,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEet"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830145,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEev"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830145,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEeu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830146,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEew"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830147,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_l"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830147,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_m"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830147,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_n"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830147,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_o"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830148,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEez"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830154,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_p"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830154,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEe0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830154,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_q"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830155,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEe3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830158,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEe4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830158,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEe5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830158,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEe6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830160,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEe7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830161,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_t"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830161,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_u"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830161,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_s"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830161,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_r"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830162,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEe-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830167,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_v"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830167,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_w"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830167,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEe_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830168,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEfC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830171,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830171,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830171,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830173,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830173,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_x"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830173,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_y"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830173,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830173,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_z"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830174,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEfJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830180,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830180,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830180,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830181,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEfN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830184,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830184,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830184,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830185,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830186,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830186,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830186,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830186,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830187,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEfU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830192,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830193,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830193,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830194,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEfY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830196,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830196,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830196,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830198,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830199,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFY_9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830199,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY_-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830199,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFY__"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830199,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830200,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEff"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830205,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830206,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830206,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEfj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830206,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830209,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830209,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830209,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830211,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830211,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830211,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830211,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830211,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830212,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEfq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830217,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830218,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEfu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830218,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830218,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830221,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830221,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830221,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830223,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEfy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830224,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830224,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830224,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEf1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830224,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830224,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830229,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEf2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830230,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830230,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEf5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830230,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830233,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEf6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830233,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEf7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830233,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEf8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830235,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830235,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEf9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830235,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830235,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830236,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830236,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEgA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830242,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830242,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830242,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830243,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEgE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830246,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830246,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830246,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830247,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830248,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830248,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830248,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830248,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830249,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEgL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830254,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830255,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830255,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEgP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830255,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830258,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830258,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830258,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830260,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830261,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830261,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830261,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830261,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830262,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEgW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830267,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830268,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEga"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830268,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830268,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830271,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830271,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830271,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830273,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEge"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830274,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830274,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830274,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830274,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEgh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830274,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830280,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830280,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830280,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830281,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEgl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830284,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830284,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830284,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830286,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830286,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830286,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830286,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830286,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830287,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEgs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830292,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830293,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830293,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830293,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEgw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830296,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830296,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830296,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEgx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830298,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEg0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830298,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830298,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830298,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZAv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830298,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830299,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEg3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830304,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEg4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830305,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830305,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAx"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830306,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEg7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830309,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEg8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830309,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEg9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830309,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEg-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830310,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEg_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830311,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZA0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830311,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZA1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830311,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZA2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830311,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZAz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830312,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEhC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830318,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830319,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZA3"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830319,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEhG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830319,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZA4"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830322,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830322,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830322,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830324,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830325,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZA6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830325,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEhN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830325,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZA5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830325,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZA8"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830325,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZA7"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830331,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830331,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZA9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830331,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZA-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830332,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEhR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830335,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830335,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830335,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830336,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830337,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830337,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830337,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZA_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830337,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBC"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830338,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEhY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830343,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBD"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830343,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830343,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830344,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEhc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830347,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830347,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830347,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830348,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830349,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBG"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830349,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830349,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBH"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830349,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830350,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEhj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830355,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830356,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEhn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830356,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830356,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830360,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830360,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEho"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830360,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830361,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830362,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830362,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830362,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBN"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830362,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBO"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830363,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEhu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830368,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhv"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830369,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEhy"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830369,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830369,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830373,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEhz"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830373,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEh1"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830373,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEh0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830374,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEh2"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830375,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEh5"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830375,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBS"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830375,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830375,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830375,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBR"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830382,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830382,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEh6"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830383,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830383,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEh9"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830388,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiA"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830388,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEh-"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830388,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEh_"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830390,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiB"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830391,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830391,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBY"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830391,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBZ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830391,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBa"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830392,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEiE"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830397,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiF"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830398,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBc"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830398,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEiI"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830398,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBb"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830401,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiK"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830401,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiL"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830401,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiJ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830403,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBd"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830403,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBe"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830403,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBg"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830403,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBf"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830403,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiM"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830404,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEiP"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830409,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiQ"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830410,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEiT"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830410,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBh"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830410,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBi"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830413,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiU"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830413,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiV"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830413,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiW"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830415,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBk"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830415,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBm"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830415,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiX"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830415,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBl"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830415,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBj"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830416,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEia"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830421,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBo"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830421,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEib"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830421,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBn"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830422,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEie"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830425,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEih"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830425,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEif"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830425,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEig"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830427,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBs"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830427,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEii"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830427,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBr"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830427,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBp"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830427,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830428,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEil"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830433,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEim"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830434,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEip"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830434,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBt"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830434,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBu"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830438,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEiq"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830438,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEir"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830438,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEis"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830439,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEit"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830440,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBw"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830440,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZBx"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830440,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZB0"
		},
		{
			"requestId": "otherCharge:4d3d7ca8-0960-48e6-9d35-1b9bf8571d3a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830440,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZBv"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830651,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZB1"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830651,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZB5"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830651,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZB4"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830651,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZB2"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830651,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZB3"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830776,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZB6"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830777,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZB7"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830777,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZB8"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830777,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZB9"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830840,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZB-"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830841,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZB_"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830841,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCB"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830841,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCA"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830842,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEiw"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830847,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCC"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830847,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEix"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830847,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCD"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830848,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEi0"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830853,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEi3"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830853,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEi1"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830853,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEi2"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830855,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCF"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830855,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEi4"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830855,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCE"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830855,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCG"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830856,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEi7"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830856,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCH"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830861,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEi8"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830862,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCJ"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830862,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEi_"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830862,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCI"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830865,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjA"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830865,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjB"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830865,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjC"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830867,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCK"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830867,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjD"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830868,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEjG"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830868,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCN"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830868,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCL"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830868,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCM"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830873,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjH"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830874,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCO"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830874,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEjK"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830874,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCP"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830877,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjM"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830877,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjL"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830877,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjN"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830879,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjO"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830879,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCQ"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830879,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCS"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830879,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCR"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830880,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEjR"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830880,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCT"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830885,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjS"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830885,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCV"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830885,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCU"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830886,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEjV"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830889,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjW"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830889,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjX"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830889,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjY"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830891,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjZ"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830891,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCY"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830891,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCW"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830891,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCX"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830891,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCZ"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830892,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEjc"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830896,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjd"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830897,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCb"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830897,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEjg"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830897,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCa"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830903,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjj"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830903,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjh"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830903,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEji"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830905,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjk"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830913,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCd"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830913,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCc"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830913,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCe"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830913,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCf"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830914,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEjn"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830920,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjo"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830920,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCh"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830920,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCg"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830921,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEjr"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830924,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjt"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830924,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjs"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830924,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEju"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830925,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjv"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830926,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCj"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830926,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCk"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830926,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCl"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830926,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCi"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830927,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEjy"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830931,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEjz"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830932,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCn"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830932,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEj2"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830932,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCm"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830935,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEj3"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830935,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEj4"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830935,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEj5"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830937,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCp"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830937,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCq"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830937,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEj6"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830937,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCo"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830938,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEj9"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830938,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCr"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830943,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCs"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830943,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEj-"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830944,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEkB"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830944,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCt"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830947,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkC"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830947,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkE"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830947,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkD"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830948,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkF"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830949,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCw"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830949,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCu"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830949,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZCv"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830949,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCx"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830950,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEkI"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830955,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkJ"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830956,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCz"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830956,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEkM"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830956,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZCy"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830959,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkO"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830959,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkP"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830959,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkN"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830961,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZC0"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830961,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZC2"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830961,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZC1"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830961,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkQ"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830962,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEkT"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830962,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZC3"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830967,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkU"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830968,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZC4"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830968,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZC5"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830968,
			"priority": "REST",
			"id": "AV_6xnmA8I0yF8eIiEkX"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830971,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkY"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830971,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkZ"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830971,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEka"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830973,
			"priority": "REST",
			"id": "AV_6xoVzLrJE4-YzFZC6"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740830973,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEkb"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830973,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZC8"
		},
		{
			"requestId": "sellingEntity:da088107-53df-4e75-8265-bb27a7aec8d1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740830973,
			"priority": "INFO",
			"id": "AV_6xoVzLrJE4-YzFZC7"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740831126,
			"priority": "DEBUG",
			"id": "AV_6xnmA8I0yF8eIiEke"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740832124,
			"priority": "DEBUG",
			"id": "AV_6xpEazauC8Nm_iFJM"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740833026,
			"priority": "REST",
			"id": "AV_6xpEazauC8Nm_iFJN"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:e73836a2-8792-4db2-9f4d-b17a810866f4",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740833034,
			"priority": "DEBUG",
			"id": "AV_6xpEazauC8Nm_iFJO"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740833091,
			"priority": "REST",
			"id": "AV_6xoGFg_InkCeeB3-K"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:891f6abf-8922-4b28-8783-95268e6770ec",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740833116,
			"priority": "DEBUG",
			"id": "AV_6xoGFg_InkCeeB3-L"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740833123,
			"priority": "DEBUG",
			"id": "AV_6xpEazauC8Nm_iFJR"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740833272,
			"priority": "DEBUG",
			"id": "AV_6xpR6fA7zB0A3drtq"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740833272,
			"priority": "DEBUG",
			"id": "AV_6xpR6fA7zB0A3drtr"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740833376,
			"priority": "REST",
			"id": "AV_6xpEazauC8Nm_iFJS"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:6f685988-4bcc-4227-a789-ee26144b4b3f",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740833383,
			"priority": "DEBUG",
			"id": "AV_6xpEazauC8Nm_iFJT"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740833437,
			"priority": "REST",
			"id": "AV_6xoGFg_InkCeeB3-O"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:22526602-7b92-41c9-96d0-520b236f2fae",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740833459,
			"priority": "DEBUG",
			"id": "AV_6xoGFg_InkCeeB3-P"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740834127,
			"priority": "DEBUG",
			"id": "AV_6xpEazauC8Nm_iFJW"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740835124,
			"priority": "DEBUG",
			"id": "AV_6xpEazauC8Nm_iFJX"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:6861c6ba-94a6-4b6d-afc5-6720ce885c0b",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740835727,
			"priority": "REST",
			"id": "AV_6xpygg_InkCeeB3-T"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740835727,
			"priority": "WARN",
			"id": "AV_6xpygg_InkCeeB3-S"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:6861c6ba-94a6-4b6d-afc5-6720ce885c0b",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740835729,
			"priority": "REST",
			"id": "AV_6xpEazauC8Nm_iFJY"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:6861c6ba-94a6-4b6d-afc5-6720ce885c0b",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740835733,
			"priority": "DEBUG",
			"id": "AV_6xpEazauC8Nm_iFJZ"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:6861c6ba-94a6-4b6d-afc5-6720ce885c0b",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740835734,
			"priority": "REST",
			"id": "AV_6xpygg_InkCeeB3-U"
		},
		{
			"requestId": "ip-172-10-113-56.ec2.internal:6861c6ba-94a6-4b6d-afc5-6720ce885c0b",
			"source": "ip-172-10-113-56.ec2.internal",
			"target": "ip-172-10-113-56.ec2.internal",
			"timestamp": 1511740835737,
			"priority": "DEBUG",
			"id": "AV_6xpygg_InkCeeB3-V"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740836122,
			"priority": "DEBUG",
			"id": "AV_6xpEazauC8Nm_iFJc"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740836172,
			"priority": "REST",
			"id": "AV_6xpR6fA7zB0A3drts"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:7c4f4d22-e7ae-46b4-ad3d-5a1e708b3ac4",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740836173,
			"priority": "REST",
			"id": "AV_6xpR6fA7zB0A3drtt"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:7c4f4d22-e7ae-46b4-ad3d-5a1e708b3ac4",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740836176,
			"priority": "REST",
			"id": "AV_6xqDstyK4rV5lzihL"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:7c4f4d22-e7ae-46b4-ad3d-5a1e708b3ac4",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740836176,
			"priority": "DEBUG",
			"id": "AV_6xqDstyK4rV5lzihM"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:7c4f4d22-e7ae-46b4-ad3d-5a1e708b3ac4",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740836177,
			"priority": "REST",
			"id": "AV_6xpR6fA7zB0A3drtu"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:7c4f4d22-e7ae-46b4-ad3d-5a1e708b3ac4",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740836179,
			"priority": "REST",
			"id": "AV_6xpR6fA7zB0A3drtv"
		},
		{
			"requestId": "ip-172-21-113-5.ec2.internal:7c4f4d22-e7ae-46b4-ad3d-5a1e708b3ac4",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740836179,
			"priority": "DEBUG",
			"id": "AV_6xpR6fA7zB0A3drtw"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740836277,
			"priority": "DEBUG",
			"id": "AV_6xpR6fA7zB0A3drty"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740836277,
			"priority": "DEBUG",
			"id": "AV_6xpR6fA7zB0A3drtx"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:0f88c2c3-8398-4583-a29f-a98azfa6e4a8",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740836314,
			"priority": "REST",
			"id": "AV_6xqCgtyK4rV5lzihG"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:0f88c2c3-8398-4583-a29f-a98azfa6e4a8",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740836315,
			"priority": "REST",
			"id": "AV_6xpEazauC8Nm_iFJd"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:0f88c2c3-8398-4583-a29f-a98azfa6e4a8",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740836324,
			"priority": "DEBUG",
			"id": "AV_6xpEazauC8Nm_iFJe"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:0f88c2c3-8398-4583-a29f-a98azfa6e4a8",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740836325,
			"priority": "REST",
			"id": "AV_6xqCgtyK4rV5lzihH"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:0f88c2c3-8398-4583-a29f-a98azfa6e4a8",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740836325,
			"priority": "INFO",
			"id": "AV_6xqCgtyK4rV5lzihI"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740837121,
			"priority": "DEBUG",
			"id": "AV_6xpEazauC8Nm_iFJh"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740838122,
			"priority": "DEBUG",
			"id": "AV_6xqiOLrJE4-YzFZC9"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740839141,
			"priority": "DEBUG",
			"id": "AV_6xqiOLrJE4-YzFZC-"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740840298,
			"priority": "DEBUG",
			"id": "AV_6xqiOLrJE4-YzFZC_"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740841286,
			"priority": "DEBUG",
			"id": "AV_6xqiOLrJE4-YzFZDA"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:32c4f28a-b675-4fbe-bc24-24bdfeac6fc0",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740841343,
			"priority": "REST",
			"id": "AV_6xqiOLrJE4-YzFZDB"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:32c4f28a-b675-4fbe-bc24-24bdfeac6fc0",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740841343,
			"priority": "REST",
			"id": "AV_6xqCgtyK4rV5lzihJ"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:32c4f28a-b675-4fbe-bc24-24bdfeac6fc0",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740841352,
			"priority": "DEBUG",
			"id": "AV_6xqiOLrJE4-YzFZaz"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:32c4f28a-b675-4fbe-bc24-24bdfeac6fc0",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740841353,
			"priority": "REST",
			"id": "AV_6xqCgtyK4rV5lzihK"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740842122,
			"priority": "DEBUG",
			"id": "AV_6xqiOLrJE4-YzFZDF"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740843124,
			"priority": "DEBUG",
			"id": "AV_6xqiOLrJE4-YzFZDG"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740844121,
			"priority": "DEBUG",
			"id": "AV_6xr_kCauC8Nm_iFJi"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740845169,
			"priority": "DEBUG",
			"id": "AV_6xr_kCauC8Nm_iFJj"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740846122,
			"priority": "DEBUG",
			"id": "AV_6xr_kCauC8Nm_iFJk"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740846542,
			"priority": "REST",
			"id": "AV_6xr_kCauC8Nm_iFJl"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:f409bed7-4076-468b-b595-355f437eb6e6",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740846566,
			"priority": "DEBUG",
			"id": "AV_6xr_kCauC8Nm_iFJm"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740847125,
			"priority": "DEBUG",
			"id": "AV_6xr_kCauC8Nm_iFJp"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740848166,
			"priority": "DEBUG",
			"id": "AV_6xr_kCauC8Nm_iFJq"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740849121,
			"priority": "DEBUG",
			"id": "AV_6xr_kCauC8Nm_iFJr"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740850123,
			"priority": "DEBUG",
			"id": "AV_6xtdS8I0yF8eIiEkf"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740851122,
			"priority": "DEBUG",
			"id": "AV_6xtdS8I0yF8eIiEkg"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740851850,
			"priority": "DEBUG",
			"id": "AV_6xtr38I0yF8eIiEkp"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740851851,
			"priority": "DEBUG",
			"id": "AV_6xtr38I0yF8eIiEkq"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740852125,
			"priority": "DEBUG",
			"id": "AV_6xtdS8I0yF8eIiEkh"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740853121,
			"priority": "DEBUG",
			"id": "AV_6xtdS8I0yF8eIiEki"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740853458,
			"priority": "REST",
			"id": "AV_6xtdS8I0yF8eIiEkj"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:6a40ca80-7266-4db1-97b1-1ce3d3840cc3",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740853465,
			"priority": "DEBUG",
			"id": "AV_6xtdS8I0yF8eIiEkk"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740853516,
			"priority": "REST",
			"id": "AV_6xuN5fA7zB0A3drtz"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:4af28f15-3e8e-48b7-a3f8-00b9c2cd90d4",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740853552,
			"priority": "DEBUG",
			"id": "AV_6xuN5fA7zB0A3drt0"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740854121,
			"priority": "DEBUG",
			"id": "AV_6xtdS8I0yF8eIiEkn"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740855120,
			"priority": "DEBUG",
			"id": "AV_6xtdS8I0yF8eIiEko"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740856123,
			"priority": "DEBUG",
			"id": "AV_6xu3vg_InkCeeB3-W"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740857122,
			"priority": "DEBUG",
			"id": "AV_6xu3vg_InkCeeB3-Y"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740858123,
			"priority": "DEBUG",
			"id": "AV_6xu3vg_InkCeeB3-Z"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740859121,
			"priority": "DEBUG",
			"id": "AV_6xu3vg_InkCeeB3-a"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740861687,
			"priority": "DEBUG",
			"id": "AV_6xu3vg_InkCeeB3-b"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740861912,
			"priority": "DEBUG",
			"id": "AV_6xwGjLrJE4-YzFZDH"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740861923,
			"priority": "REST",
			"id": "AV_6xwLazauC8Nm_iFJs"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:bcd78b4c-9b31-44b8-aaa6-9c46a2e86819",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740861958,
			"priority": "DEBUG",
			"id": "AV_6xwLazauC8Nm_iFJt"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740862152,
			"priority": "DEBUG",
			"id": "AV_6xwGjLrJE4-YzFZDI"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740863122,
			"priority": "DEBUG",
			"id": "AV_6xwGjLrJE4-YzFZDJ"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740864125,
			"priority": "DEBUG",
			"id": "AV_6xwGjLrJE4-YzFZDK"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740865121,
			"priority": "DEBUG",
			"id": "AV_6xwGjLrJE4-YzFZDL"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740866123,
			"priority": "DEBUG",
			"id": "AV_6xwGjLrJE4-YzFZDM"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740867123,
			"priority": "DEBUG",
			"id": "AV_6xxk2fA7zB0A3drt3"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740868125,
			"priority": "DEBUG",
			"id": "AV_6xxk2fA7zB0A3drt4"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740869122,
			"priority": "DEBUG",
			"id": "AV_6xxk2fA7zB0A3drt5"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740870126,
			"priority": "DEBUG",
			"id": "AV_6xxk2fA7zB0A3drt6"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740871301,
			"priority": "DEBUG",
			"id": "AV_6xxk2fA7zB0A3drt7"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740872122,
			"priority": "DEBUG",
			"id": "AV_6xxk2fA7zB0A3drt8"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740873146,
			"priority": "DEBUG",
			"id": "AV_6xzaznCauC8Nm_iFJw"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740873203,
			"priority": "DEBUG",
			"id": "AV_6xy1UtyK4rV5lzihQ"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-21-113-5.ec2.internal",
			"target": "ip-172-21-113-5.ec2.internal",
			"timestamp": 1511740873203,
			"priority": "DEBUG",
			"id": "AV_6xy1UtyK4rV5lzihP"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740874123,
			"priority": "DEBUG",
			"id": "AV_6xzaznCauC8Nm_iFJx"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740875122,
			"priority": "DEBUG",
			"id": "AV_6xzaznCauC8Nm_iFJy"
		},
		{
			"requestId": "no-request-id",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740875851,
			"priority": "REST",
			"id": "AV_6xzaznCauC8Nm_iFJz"
		},
		{
			"requestId": "ip-172-10-113-5.ec2.internal:4089d5f8-c7b2-470c-86ca-92a06b8865az",
			"source": "ip-172-10-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740875867,
			"priority": "DEBUG",
			"id": "AV_6xzaznCauC8Nm_iFJ0"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740876125,
			"priority": "DEBUG",
			"id": "AV_6xzaznCauC8Nm_iFJ3"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740877125,
			"priority": "DEBUG",
			"id": "AV_6xzaznCauC8Nm_iFJ4"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740878126,
			"priority": "DEBUG",
			"id": "AV_6xzaznCauC8Nm_iFJ5"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740879123,
			"priority": "DEBUG",
			"id": "AV_6x0heg_InkCeeB3-c"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740880123,
			"priority": "DEBUG",
			"id": "AV_6x0heg_InkCeeB3-d"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740881124,
			"priority": "DEBUG",
			"id": "AV_6x0heg_InkCeeB3-e"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740882123,
			"priority": "DEBUG",
			"id": "AV_6x0heg_InkCeeB3-f"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740883123,
			"priority": "DEBUG",
			"id": "AV_6x0heg_InkCeeB3-g"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740884132,
			"priority": "DEBUG",
			"id": "AV_6x0heg_InkCeeB3-h"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:800a35af-15e3-4e96-bf23-da4b19c7f660",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740884965,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEkr"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:800a35af-15e3-4e96-bf23-da4b19c7f660",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740884985,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzihR"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885012,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEkt"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885012,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEku"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:800a35af-15e3-4e96-bf23-da4b19c7f660",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885012,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEks"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:800a35af-15e3-4e96-bf23-da4b19c7f660",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740885012,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzihS"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885013,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEkv"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885031,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEkw"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740885127,
			"priority": "DEBUG",
			"id": "AV_6x1_xfA7zB0A3drt9"
		},
		{
			"requestId": "emailContacts:8afbe162-8f52-44fd-b626-20c100810408",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885268,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEky"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885270,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEkz"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885271,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEk1"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885271,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEk3"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885271,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEk0"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885271,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEk2"
		},
		{
			"requestId": "emailContacts:8afbe162-8f52-44fd-b626-20c100810408",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740885271,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzihV"
		},
		{
			"requestId": "emailContacts:8afbe162-8f52-44fd-b626-20c100810408",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740885283,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzihW"
		},
		{
			"requestId": "emailContacts:8afbe162-8f52-44fd-b626-20c100810408",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885284,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEk5"
		},
		{
			"requestId": "emailContacts:8afbe162-8f52-44fd-b626-20c100810408",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885284,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEk4"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:995e9367-f909-47c0-b390-c256ab9f08f4",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885313,
			"priority": "REST",
			"id": "AV_6x2DB8I0yF8eIiEs7"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:995e9367-f909-47c0-b390-c256ab9f08f4",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740885313,
			"priority": "REST",
			"id": "AV_6x1_xfA7zB0A3drt-"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:995e9367-f909-47c0-b390-c256ab9f08f4",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740885320,
			"priority": "DEBUG",
			"id": "AV_6x1_xfA7zB0A3drt_"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:995e9367-f909-47c0-b390-c256ab9f08f4",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885320,
			"priority": "REST",
			"id": "AV_6x2DB8I0yF8eIiEs8"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885321,
			"priority": "INFO",
			"id": "AV_6x2DB8I0yF8eIiEs9"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885321,
			"priority": "INFO",
			"id": "AV_6x2DB8I0yF8eIiEs_"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885321,
			"priority": "INFO",
			"id": "AV_6x2DB8I0yF8eIiEs-"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885338,
			"priority": "REST",
			"id": "AV_6x2DB8I0yF8eIiEtA"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885352,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEk6"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885353,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEk7"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885353,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEk8"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:94549614-6101-4b4c-add0-0d67a4aa2e85",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885363,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEk9"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:94549614-6101-4b4c-add0-0d67a4aa2e85",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740885364,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzihZ"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:94549614-6101-4b4c-add0-0d67a4aa2e85",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740885373,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziha"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:94549614-6101-4b4c-add0-0d67a4aa2e85",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885374,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEk-"
		},
		{
			"requestId": "eventMilestoneDate:6cc83e6a-5225-494c-b683-cd2898d634ca",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885374,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEk_"
		},
		{
			"requestId": "eventMilestoneDate:6cc83e6a-5225-494c-b683-cd2898d634ca",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885374,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElA"
		},
		{
			"requestId": "eventMilestoneDate:6cc83e6a-5225-494c-b683-cd2898d634ca",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885375,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElB"
		},
		{
			"requestId": "eventMilestoneDate:6cc83e6a-5225-494c-b683-cd2898d634ca",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885378,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElC"
		},
		{
			"requestId": "no-request-id",
			"source": "server7",
			"target": "server7",
			"timestamp": 1511740885553,
			"priority": "DEBUG",
			"id": "AV_6x1_uLrJE4-YzFZDP"
		},
		{
			"requestId": "no-request-id",
			"source": "server7",
			"target": "server7",
			"timestamp": 1511740885553,
			"priority": "REST",
			"id": "AV_6x1_uLrJE4-YzFZDO"
		},
		{
			"requestId": "no-request-id",
			"source": "server7",
			"target": "server7",
			"timestamp": 1511740885553,
			"priority": "REST",
			"id": "AV_6x1_uLrJE4-YzFZazn"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885690,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElE"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885690,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElD"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885690,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElF"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885690,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElG"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885691,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElH"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885712,
			"priority": "INFO",
			"id": "AV_6x2DB8I0yF8eIiEtC"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885712,
			"priority": "REST",
			"id": "AV_6x2DB8I0yF8eIiEtB"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885712,
			"priority": "INFO",
			"id": "AV_6x2DB8I0yF8eIiEtD"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885712,
			"priority": "INFO",
			"id": "AV_6x2DB8I0yF8eIiEtE"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885713,
			"priority": "REST",
			"id": "AV_6x2DB8I0yF8eIiEtF"
		},
		{
			"requestId": "eventMilestoneDate:6cc83e6a-5225-494c-b683-cd2898d634ca",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885724,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElK"
		},
		{
			"requestId": "eventMilestoneDate:6cc83e6a-5225-494c-b683-cd2898d634ca",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885724,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElI"
		},
		{
			"requestId": "eventMilestoneDate:6cc83e6a-5225-494c-b683-cd2898d634ca",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885724,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElM"
		},
		{
			"requestId": "eventMilestoneDate:6cc83e6a-5225-494c-b683-cd2898d634ca",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885724,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElJ"
		},
		{
			"requestId": "eventMilestoneDate:6cc83e6a-5225-494c-b683-cd2898d634ca",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885724,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElL"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885847,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElN"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885847,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElO"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885848,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElP"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740885848,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzihd"
		},
		{
			"requestId": "eventMilestoneDate:6cc83e6a-5225-494c-b683-cd2898d634ca",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885866,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElQ"
		},
		{
			"requestId": "eventMilestoneDate:6cc83e6a-5225-494c-b683-cd2898d634ca",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885866,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElR"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885870,
			"priority": "REST",
			"id": "AV_6x2DB8I0yF8eIiEtG"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885871,
			"priority": "REST",
			"id": "AV_6x2DB8I0yF8eIiEtI"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885871,
			"priority": "INFO",
			"id": "AV_6x2DB8I0yF8eIiEtH"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885875,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElS"
		},
		{
			"requestId": "tradingEntity:730e1637-7d9a-4c9e-a1e9-b8dee8f651b1",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740885875,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzihe"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740885877,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElV"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740886360,
			"priority": "DEBUG",
			"id": "AV_6x1_xfA7zB0A3druC"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886590,
			"priority": "INFO",
			"id": "AV_6x2DB8I0yF8eIiEtL"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886590,
			"priority": "INFO",
			"id": "AV_6x2DB8I0yF8eIiEtM"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886590,
			"priority": "REST",
			"id": "AV_6x2DB8I0yF8eIiEtJ"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886590,
			"priority": "INFO",
			"id": "AV_6x2DB8I0yF8eIiEtK"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886591,
			"priority": "REST",
			"id": "AV_6x2DB8I0yF8eIiEtN"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886646,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElY"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886646,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElZ"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886646,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElX"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886646,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElW"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886647,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEla"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886737,
			"priority": "REST",
			"id": "AV_6x2DB8I0yF8eIiEtO"
		},
		{
			"requestId": "marketplace:b0aaze28-baz3-4879-9324-b2f6210e652b",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886737,
			"priority": "INFO",
			"id": "AV_6x2DB8I0yF8eIiEtP"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886888,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElc"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886888,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElb"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886888,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEld"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886888,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEle"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886957,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElg"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886957,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEli"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886957,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElf"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886957,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElh"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740886958,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzihh"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740886970,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzihi"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886971,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElj"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886971,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElk"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740886972,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzihl"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740886979,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzihm"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740886979,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziho"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740886979,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzihn"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886982,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElm"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886982,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEll"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740886982,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzihp"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886982,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEln"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740886983,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzihs"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740886993,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziht"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886994,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElp"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740886994,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElo"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740886995,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzihw"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887001,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzihx"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887001,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzihy"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887001,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzihz"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887005,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElq"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887005,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEls"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887005,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzih0"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887005,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElr"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887006,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzih3"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887017,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzih4"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887018,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzih7"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887018,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElt"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887018,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElu"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887026,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzih9"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887026,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzih-"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887026,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzih8"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887029,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiElw"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887029,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElv"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887029,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzih_"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887030,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElx"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887030,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziiC"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887042,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEly"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887042,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiD"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887043,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiElz"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887043,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziiG"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887050,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiJ"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887050,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiI"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887050,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiH"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887053,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiK"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887054,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziiN"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887054,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEl1"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887054,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEl0"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887054,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEl2"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887066,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiO"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887066,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEl3"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887066,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEl4"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887067,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziiR"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887074,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiU"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887074,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiT"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887074,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiS"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887077,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiV"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887078,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEl5"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887078,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziiY"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887078,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEl6"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887078,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEl7"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887090,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEl8"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887090,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEl9"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887090,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiZ"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887091,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziic"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887099,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziid"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887099,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziie"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887099,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziif"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887102,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziig"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887102,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEl-"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887102,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEl_"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887102,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmA"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887103,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziij"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887114,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziik"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887114,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmB"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887114,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmC"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887115,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziin"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887122,
			"priority": "DEBUG",
			"id": "AV_6x1_xfA7zB0A3druD"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887122,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziio"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887122,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziip"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887122,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiq"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740887125,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziir"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887126,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887126,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmH"
		},
		{
			"requestId": "agreementType:236c2806-fcc1-4fab-9da4-9e1164c9193c",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887126,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887397,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887397,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887397,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887397,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887397,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887620,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887648,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887648,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887648,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887889,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887919,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887919,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740887919,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmT"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888124,
			"priority": "DEBUG",
			"id": "AV_6x1_xfA7zB0A3druE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888165,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888194,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888194,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888195,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888261,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEma"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888261,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888261,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888261,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888262,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziiu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888273,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888274,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888274,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziiy"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888274,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEme"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888282,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziiz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888282,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzii1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888282,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzii0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888285,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzii2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888286,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888286,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888286,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888286,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888287,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzii5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888298,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzii6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888299,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888299,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888300,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzii9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888307,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888307,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzii-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888307,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzii_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888310,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888310,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmo"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888310,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888310,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888310,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEml"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888311,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzijE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888322,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888322,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888322,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888323,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzijI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888330,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888330,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888330,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888333,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888334,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888334,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888334,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEms"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888334,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888335,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzijP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888345,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888346,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888346,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzijT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888346,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888353,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888353,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888353,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888368,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888369,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmy"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888369,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzija"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888369,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEmx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888369,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEmz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888369,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEm0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888391,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888392,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEm2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888392,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEm1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888393,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzije"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888399,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888399,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888399,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888402,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziji"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888403,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEm6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888403,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEm3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888403,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEm5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888403,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEm4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888404,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzijl"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888415,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEm8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888415,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEm7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888415,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888416,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzijp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888422,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888423,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888423,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijs"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888425,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888426,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEm9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888426,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888426,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEm-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888426,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEm_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888427,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzijw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888438,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888438,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzijy"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888438,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888439,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzij1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888446,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzij3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888446,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzij4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888446,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzij2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888449,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzij5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888450,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888450,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzij8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888450,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888450,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888450,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888461,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzij9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888462,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzikA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888462,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888462,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888469,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888469,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888469,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888472,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888473,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888473,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888473,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888473,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888474,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzikH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888485,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888485,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888486,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888487,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzikL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888493,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888493,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888493,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888496,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888497,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888497,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888497,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888497,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888498,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzikS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888509,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888509,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888509,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888510,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzikW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888517,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888517,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888517,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888520,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888520,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzika"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888520,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888520,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888521,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888521,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzikd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888532,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEna"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888532,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzike"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888532,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888533,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzikh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888540,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888540,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888540,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziki"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888542,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikl"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888543,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888543,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888543,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEne"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888543,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888544,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziko"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888555,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEng"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888555,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888555,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888556,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziks"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888563,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888563,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziku"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888563,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888566,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzikw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888567,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888567,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEni"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888567,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888567,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888567,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzikz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888578,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzik0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888579,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888579,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnl"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888580,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzik3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888586,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzik4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888586,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzik6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888586,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzik5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888589,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzik7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888597,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888597,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888597,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888597,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEno"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888597,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzik-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888609,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEns"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888609,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888609,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzik_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888610,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzilC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888616,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888616,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888616,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888619,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888620,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888620,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888620,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEnv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888620,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888621,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzilJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888632,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888632,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888633,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzilN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888633,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEny"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888640,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888640,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888640,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888643,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888644,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEnz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888644,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEn0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888644,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEn1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888644,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEn2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888645,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzilU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888656,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEn3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888656,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888656,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEn4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888657,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzilY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888663,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888663,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888663,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzila"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888666,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888667,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEn6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888667,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEn5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888667,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEn7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888667,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEn8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888668,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzilf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888679,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888679,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEn9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888680,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEn-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888680,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzilj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888687,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888687,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888687,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzill"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888690,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziln"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888691,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEn_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888691,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888691,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEoA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888691,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEoB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888692,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzilq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888703,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888703,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888703,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888704,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzilu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888710,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888710,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888710,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzilw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888713,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzily"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888714,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEoH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888714,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888714,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888714,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEoG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888715,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzil1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888725,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzil2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888726,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888726,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888727,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzil5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888733,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzil6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888733,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzil8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888733,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzil7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888737,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888737,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzil9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888737,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888737,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEoM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888737,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEoN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888738,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzimA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888748,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888749,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888749,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzimE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888749,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888756,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888756,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888756,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888759,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888760,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888760,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEoT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888760,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEoS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888760,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888761,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzimL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888771,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888772,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888772,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzimP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888772,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888779,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888779,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888779,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888782,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888783,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzimW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888783,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEoY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888783,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888783,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEoZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888783,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoa"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888794,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888795,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEob"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888795,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888795,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzima"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888802,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888802,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888802,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888805,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzime"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888806,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEod"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888806,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEoe"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888806,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEof"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888806,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzimh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888806,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEog"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888817,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888818,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888818,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziml"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888818,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888825,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimo"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888825,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888825,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888828,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888829,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzims"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888829,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEok"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888829,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEol"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888829,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888829,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEom"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888840,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888841,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEon"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888841,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoo"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888842,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzimw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888848,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888848,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimy"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888848,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzimz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888851,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzim0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888852,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEor"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888852,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzim3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888852,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEop"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888852,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEoq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888852,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEos"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888863,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzim4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888863,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEou"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888863,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEot"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888864,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzim7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888871,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzim-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888871,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzim9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888871,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzim8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888874,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzim_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888875,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEow"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888875,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEov"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888875,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzinC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888875,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEox"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888875,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoy"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888886,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888887,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzinG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888887,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEo0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888887,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEoz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888894,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888894,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888894,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888897,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEo1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888897,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888898,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEo2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888898,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzinN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888898,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEo3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888898,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEo4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888908,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888909,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEo5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888909,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEo6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888910,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzinR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888918,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888918,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888918,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888921,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEo8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888921,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888921,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEo9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888921,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEo-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888921,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEo7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888922,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzinY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888932,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888932,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888932,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEo_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888933,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzinc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888940,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzind"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888940,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzine"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888940,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888942,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzing"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888943,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888943,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888943,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888943,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888944,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzinj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888954,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzink"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888955,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888955,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888956,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzinn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888963,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzino"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888963,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888963,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888966,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888966,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888966,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888966,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888967,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888967,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzinu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888978,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888978,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888979,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888979,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziny"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888986,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzin0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888986,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzin1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888986,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzinz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888989,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888989,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888989,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740888989,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888989,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzin2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740888990,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzin5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889001,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzin6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889002,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889002,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889002,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzin9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889009,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzin_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889009,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzin-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889009,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889012,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889013,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889013,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889013,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889013,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889013,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzioE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889024,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889024,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889024,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889025,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzioI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889032,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889032,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889032,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889035,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889035,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889035,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889035,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889035,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpa"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889036,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzioP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889047,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889048,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzioT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889048,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpe"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889048,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889055,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889055,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889055,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889058,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889060,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889060,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEph"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889060,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889060,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889061,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzioa"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889071,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziob"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889072,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889072,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889072,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzioe"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889079,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziog"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889079,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889079,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziof"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889082,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889083,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziol"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889083,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpl"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889083,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889083,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpo"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889083,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889095,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889095,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziom"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889096,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889096,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziop"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889104,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzioq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889104,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzior"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889104,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzios"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889107,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziot"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889108,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889108,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889108,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889108,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEps"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889108,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lziow"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889120,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lziox"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889121,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889121,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889122,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzio0"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889122,
			"priority": "DEBUG",
			"id": "AV_6x1_xfA7zB0A3druF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889130,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzio3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889130,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzio1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889130,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzio2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889133,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzio4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889134,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEp0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889134,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpy"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889134,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEpz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889134,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEpx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889134,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzio7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889146,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzio8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889146,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEp2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889146,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEp1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889147,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzio_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889154,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzipA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889154,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzipB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889154,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzipC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889156,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzipD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889157,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEp3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889157,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEp4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889157,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEp5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889157,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEp6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889158,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzipG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889169,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEp7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889169,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEp8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889169,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzipH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889170,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzipK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889176,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzipN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889176,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzipL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889176,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzipM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889179,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzipO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889180,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEp9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889180,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEp_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889180,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889180,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEp-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889181,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzipR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889192,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzipS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889192,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889192,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889193,
			"priority": "REST",
			"id": "AV_6x1xHtyK4rV5lzipV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889200,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzipX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889200,
			"priority": "DEBUG",
			"id": "AV_6x1xHtyK4rV5lzipW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889200,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzipY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889203,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889203,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889203,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889203,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889203,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzipZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889204,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzipc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889215,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzipd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889216,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889216,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889216,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzipg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889223,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzipj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889223,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzipi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889223,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziph"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889226,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzipk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889227,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889227,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889227,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889227,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzipn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889227,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889239,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzipo"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889240,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889240,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889241,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzipr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889248,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzips"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889248,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzipt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889248,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzipu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889251,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889251,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889251,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889251,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzipv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889252,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889252,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzipy"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889264,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889264,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889264,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzipz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889265,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzip2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889272,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzip5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889272,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzip3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889272,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzip4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889275,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzip6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889276,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889276,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889276,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889276,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889276,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzip9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889287,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzip-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889288,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889288,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziqB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889288,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqa"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889295,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889295,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889295,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889298,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889299,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqe"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889299,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889299,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889299,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889300,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziqI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889311,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889311,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889311,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889312,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziqM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889319,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889319,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889319,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889322,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889322,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889322,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889322,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889323,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889323,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziqT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889334,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889334,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889334,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEql"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889335,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziqX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889341,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqa"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889341,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889341,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889344,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889345,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889345,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889345,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqo"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889345,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889346,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziqe"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889357,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889357,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889357,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqs"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889358,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziqi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889364,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889364,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziql"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889364,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889367,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889368,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889368,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889368,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEqu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889368,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889369,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziqp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889380,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqy"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889380,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889380,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889382,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziqt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889389,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889389,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889389,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889392,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziqx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889393,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEqz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889393,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEq1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889393,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEq2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889393,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEq0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889394,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziq0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889405,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEq3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889405,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziq1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889405,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEq4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889406,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziq4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889413,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziq6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889413,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziq5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889413,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziq7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889415,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziq8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889416,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEq6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889416,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEq7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889416,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEq5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889416,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEq8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889417,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziq_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889428,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889429,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEq9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889429,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzirD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889429,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEq-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889437,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889437,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889437,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889440,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889440,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889440,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889440,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEq_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889441,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889441,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzirK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889451,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889452,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889452,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889453,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzirO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889459,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889459,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889459,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889462,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889463,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889463,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889463,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889463,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzirV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889463,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889474,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889475,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889475,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889475,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzirZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889482,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzira"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889482,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889482,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889485,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzird"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889486,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889486,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889486,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889486,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889487,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzirg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889498,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889498,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889499,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzirk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889499,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889506,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889506,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirl"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889506,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889509,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziro"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889510,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889510,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889510,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889510,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889511,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzirr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889521,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirs"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889522,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889522,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889523,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzirv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889529,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziry"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889529,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889529,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889532,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzirz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889533,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889533,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889533,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889533,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEra"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889534,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzir2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889544,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzir3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889545,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889545,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889546,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzir6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889553,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzir8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889553,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzir7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889553,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzir9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889555,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzir-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889556,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889556,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889556,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889556,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEre"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889581,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzisB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889591,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889592,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889593,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzisF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889593,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEri"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889600,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889600,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889600,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889603,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889604,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889604,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErl"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889604,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889604,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889605,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzisM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889616,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889622,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889623,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEro"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889624,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzisQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889631,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889631,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889631,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889634,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889635,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889635,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889635,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889635,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErs"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889636,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzisX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889647,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889647,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEru"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889647,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889648,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzisb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889654,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzise"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889654,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889654,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889657,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889658,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889658,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889658,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiErw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889658,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEry"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889659,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzisi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889670,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889670,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiErz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889670,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEr0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889671,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzism"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889678,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889678,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziso"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889678,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889681,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEr1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889681,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEr2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889681,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEr3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889681,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889682,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzist"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889682,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEr4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889693,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889693,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEr5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889693,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEr6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889694,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzisx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889701,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisy"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889701,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzisz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889701,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzis0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889703,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzis1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889704,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEr7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889704,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEr9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889704,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEr8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889704,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEr-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889705,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzis4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889716,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889716,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEr_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889716,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzis5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889717,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzis8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889724,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzis9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889724,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzis-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889724,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzis_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889727,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889727,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889727,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889727,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889728,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzitD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889728,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889739,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889739,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889739,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889740,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzitH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889747,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889747,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889747,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889749,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889750,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889750,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889750,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889750,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889751,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzitO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889762,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889763,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889763,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889764,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzitS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889771,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889771,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889771,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889774,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889775,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889775,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889775,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzitZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889775,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889775,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889786,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzita"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889787,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzitd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889787,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889787,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889794,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889794,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzite"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889794,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889797,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889797,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889797,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889797,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzith"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889797,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889798,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzitk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889809,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitl"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889810,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889810,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889810,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzito"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889817,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889817,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889817,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889820,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzits"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889821,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889821,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889821,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsa"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889821,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889821,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzitv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889832,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzitw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889833,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEse"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889833,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889833,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzitz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889840,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzit2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889840,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzit1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889840,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzit0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889843,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzit3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889844,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889844,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzit6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889844,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889844,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889844,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889855,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzit7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889856,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzit-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889856,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889856,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889863,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lzit_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889863,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889863,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889866,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889867,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsl"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889867,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889867,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889867,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEso"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889868,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziuF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889878,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889879,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889879,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889879,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziuJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889886,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889886,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889886,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889889,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889890,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEst"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889890,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889890,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEss"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889890,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889891,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziuQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889902,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889902,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889902,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889903,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziuU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889910,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889910,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889910,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889913,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889913,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEs0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889913,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEsy"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889913,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEsx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889913,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889914,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziub"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889925,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889925,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEs1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889926,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEs2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889926,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lziuf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889933,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziug"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889933,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889933,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziui"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889936,
			"priority": "DEBUG",
			"id": "AV_6x1xItyK4rV5lziuj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889937,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEs5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889937,
			"priority": "REST",
			"id": "AV_6x1xItyK4rV5lzium"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889937,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEs3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889937,
			"priority": "INFO",
			"id": "AV_6x1um8I0yF8eIiEs4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889937,
			"priority": "REST",
			"id": "AV_6x1um8I0yF8eIiEs6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889948,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-i"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889949,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFJ6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889949,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFJ7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889950,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3-l"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889956,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-o"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889956,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-m"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889956,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-n"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889959,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-p"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889960,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFJ9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889960,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFJ-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889960,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3-s"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889960,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFJ8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889960,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFJ_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889971,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-t"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889972,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889972,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889973,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3-w"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889980,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-x"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889980,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-y"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889980,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-z"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889983,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889983,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889983,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889983,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889984,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3-3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889984,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889995,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889996,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740889996,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740889997,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3-7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890036,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890036,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890036,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3--"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890059,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3-_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890061,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890061,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890061,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890061,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890062,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3_C"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890072,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_D"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890074,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890075,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890076,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3_G"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890083,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_J"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890083,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_I"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890083,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_H"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890086,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_K"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890087,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890087,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890087,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890087,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890089,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3_N"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890099,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_O"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890101,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890101,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890104,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3_R"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890111,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_U"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890111,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_T"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890111,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_S"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890115,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_V"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890117,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890117,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890117,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890117,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890119,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3_Y"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890133,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_Z"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890136,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890136,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890138,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3_c"
		},
		{
			"requestId": "ip-172-33-113-5.ec2.internal:d339e3c7-209d-4dfa-9503-0bfe6aebceb9",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890141,
			"priority": "DEBUG",
			"id": "AV_6x1_xfA7zB0A3druG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890145,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_e"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890145,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_f"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890145,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_d"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890148,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_g"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890150,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890150,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890150,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKa"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890150,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890152,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3_j"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890163,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_k"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890166,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKe"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890166,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890169,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3_n"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890176,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_o"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890176,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_p"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890176,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_q"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890179,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_r"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890181,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890181,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890181,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890181,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890185,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3_u"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890196,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_v"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890197,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890198,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKl"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890199,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3_y"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890206,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_z"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890206,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890206,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890209,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890209,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890209,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890209,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890209,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKo"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890210,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3_5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890221,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890221,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890221,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890222,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB3_9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890229,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3__"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890229,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB3_-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890229,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4AA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890232,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890232,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4AB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890232,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKs"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890232,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890232,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890233,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4AE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890244,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4AF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890244,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890245,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890245,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4AI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890252,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4AJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890252,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4AL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890252,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4AK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890255,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4AM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890256,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFK0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890256,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFKy"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890256,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFKz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890256,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFK1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890257,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4AP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890268,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4AQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890268,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFK3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890268,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFK2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890269,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4AT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890276,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4AV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890276,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4AW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890276,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4AU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890279,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4AX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890280,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Aa"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890280,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFK7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890280,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFK6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890280,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFK4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890280,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFK5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890291,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Ab"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890292,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFK8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890292,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFK9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890293,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Ae"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890299,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Ah"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890299,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Ag"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890299,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Af"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890302,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Ai"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890303,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890303,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFK-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890303,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890303,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFK_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890304,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Al"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890314,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Am"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890315,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890315,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890316,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Ap"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890323,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4As"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890323,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Aq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890323,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Ar"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890325,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4At"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890326,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890326,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890326,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890326,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890327,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Aw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890338,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Ax"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890338,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890339,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4A0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890339,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890346,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4A3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890346,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4A2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890346,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4A1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890349,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4A4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890350,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890350,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890350,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890350,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890351,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4A7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890362,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4A8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890362,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890362,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890363,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4A_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890370,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890370,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890370,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890373,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890373,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890373,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890373,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890373,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890374,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4BG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890384,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890385,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890385,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890385,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4BK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890392,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890392,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890392,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BL"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890395,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890396,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4BR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890396,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890396,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890396,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890396,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890407,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890408,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890408,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLa"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890409,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4BV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890415,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890415,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890415,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890418,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4BZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890420,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890420,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890420,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLe"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890420,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890422,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Bc"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890433,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Bd"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890433,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890433,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890434,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Bg"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890441,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Bi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890441,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Bj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890441,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Bh"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890444,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Bk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890444,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLi"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890444,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890444,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLk"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890445,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Bn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890445,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLl"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890456,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Bo"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890458,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLn"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890458,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890459,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Br"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890466,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Bu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890466,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Bs"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890466,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Bt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890469,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Bv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890470,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890470,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLr"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890470,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLo"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890470,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890471,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4By"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890482,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Bz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890483,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLs"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890483,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLt"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890484,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4B2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890491,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4B5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890491,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4B4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890491,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4B3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890494,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4B6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890495,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890495,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFLw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890495,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890495,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4B9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890495,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890506,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4B-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890507,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLy"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890507,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFLz"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890508,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4CB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890515,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4CD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890515,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4CE"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890515,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4CC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890518,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4CF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890518,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFL0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890518,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFL2"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890518,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFL1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890519,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4CI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890519,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFL3"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890530,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4CJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890531,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4CM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890531,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFL4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890531,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFL5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890538,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4CN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890538,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4CP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890538,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4CO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890541,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4CQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890542,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFL6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890542,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFL7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890542,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFL8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890542,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFL9"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890543,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4CT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890553,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4CU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890554,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFL_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890554,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFL-"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890555,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4CX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890562,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Ca"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890562,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4CZ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890562,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4CY"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890565,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Cb"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890565,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFMB"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890565,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890565,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFMC"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890565,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMD"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890566,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Ce"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890577,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Cf"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890578,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFME"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890578,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMF"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890578,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Ci"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890585,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Cj"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890585,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Cl"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890585,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Ck"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890588,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Cm"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890589,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMG"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890589,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFMI"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890589,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFMH"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890589,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMJ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890590,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Cp"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890601,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Cq"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890601,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMK"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890601,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFML"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890602,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4Ct"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890609,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Cv"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890609,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Cu"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890609,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Cw"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890612,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4Cx"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890613,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMM"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890613,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFMO"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890613,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMP"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890613,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4C0"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890613,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFMN"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890625,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMR"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890625,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4C1"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890625,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMQ"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890626,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4C4"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890633,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4C5"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890633,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4C7"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890633,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4C6"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890637,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4C8"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890637,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFMU"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890637,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMS"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890637,
			"priority": "INFO",
			"id": "AV_6x3SSCauC8Nm_iFMT"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890637,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMV"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890638,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4C_"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890650,
			"priority": "DEBUG",
			"id": "AV_6x3AEg_InkCeeB4DA"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890650,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMW"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-33-113-5.ec2.internal",
			"timestamp": 1511740890650,
			"priority": "REST",
			"id": "AV_6x3SSCauC8Nm_iFMX"
		},
		{
			"requestId": "otherCharge:7b55124f-ce7d-4f78-ac82-d1d3c7c6a97a",
			"source": "ip-172-33-113-5.ec2.internal",
			"target": "ip-172-10-113-5.ec2.internal",
			"timestamp": 1511740890651,
			"priority": "REST",
			"id": "AV_6x3AEg_InkCeeB4DD"
		}
	]
};
