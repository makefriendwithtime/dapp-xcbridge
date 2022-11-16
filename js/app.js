var web3;
var erc20Abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "who",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
var bridgeAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "parents",
						"type": "uint8"
					},
					{
						"internalType": "bytes[]",
						"name": "interior",
						"type": "bytes[]"
					}
				],
				"internalType": "struct Xtokens.Multilocation",
				"name": "destination",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "send_tokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "xTokens",
		"outputs": [
			{
				"internalType": "contract Xtokens",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "xcUnit",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "xcUnitERC20Address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "xtokensPrecompileAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var batchAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "SubcallFailed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "SubcallSucceeded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "to",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "value",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes[]",
				"name": "callData",
				"type": "bytes[]"
			},
			{
				"internalType": "uint64[]",
				"name": "gasLimit",
				"type": "uint64[]"
			}
		],
		"name": "batchAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "to",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "value",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes[]",
				"name": "callData",
				"type": "bytes[]"
			},
			{
				"internalType": "uint64[]",
				"name": "gasLimit",
				"type": "uint64[]"
			}
		],
		"name": "batchSome",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "to",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "value",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes[]",
				"name": "callData",
				"type": "bytes[]"
			},
			{
				"internalType": "uint64[]",
				"name": "gasLimit",
				"type": "uint64[]"
			}
		],
		"name": "batchSomeUntilFailure",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

window.onload = async function() {
	if (window.ethereum) {
		try {
			await window.ethereum.enable();
		} catch (error) {
			console.error("User denied account access");
		}
		web3 = new Web3(window.ethereum);
	} else if (window.web3) {
		web3 = new Web3(window.ethereum);
	} else {
		alert("Please install wallet");
	}
}

async function connect() {
	var chainId = await web3.eth.getChainId();
	var blockNumber = await web3.eth.getBlockNumber();
	var block = await web3.eth.getBlock(blockNumber);
	var blockTimestamp = block.timestamp;
	var account = await web3.eth.getAccounts();
	var accountAddress = account[0];
	var balance = await web3.eth.getBalance(accountAddress);
	document.getElementById("chain_id").innerText = chainId;
	document.getElementById("block_number").innerText = blockNumber;
	document.getElementById("block_timestamp").innerText = blockTimestamp;
	document.getElementById("account_address").innerText = accountAddress;
	document.getElementById("account_balance").innerText = web3.utils.fromWei(balance);
}

async function read() {
	var contractAddress = document.getElementById("contract_address").value;
	var instance = new web3.eth.Contract(erc20Abi, contractAddress);
	var tokenSymbol = await instance.methods.symbol().call();
	var tokenTotalSupply = await instance.methods.totalSupply().call();
	var account = await web3.eth.getAccounts();
	var accountAddress = account[0];
	var balance = await instance.methods.balanceOf(accountAddress).call();
	document.getElementById("token_symbol").innerText = tokenSymbol;
	document.getElementById("token_totalSupply").innerText = web3.utils.fromWei(tokenTotalSupply);
	document.getElementById("token_balance").innerText = web3.utils.fromWei(balance);
	
	// instance.events.Transfer({
	// 	fromBlock: "pending"
	// }, function(error, result) {
	// 	if (error)
	// 		console.log(error);
	// 	else
	// 		console.log(result);
	// })

	// var subscription = web3.eth.subscribe('pendingTransactions', function(error, result) {
	// 	if (!error)
	// 		console.log(result);
	// }).on("data", function(transaction) {
	// 	console.log(transaction);
	// });

	// // 取消订阅
	// subscription.unsubscribe(function(error, success) {
	// 	if (success)
	// 		console.log('Successfully unsubscribed!');
	// });
}

async function xcBatchAll(){
	var ercContract = "0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080";
	var bridgeContract = "0x58beC9Bc81238e2C8a27f89CD43C0feBF87bC1E9";
	var batchContract = "0x0000000000000000000000000000000000000808";
	
	//转换成公钥
	var toAccount = "0x01" + document.getElementById("to_account").value + "00";
	var transferAmount = document.getElementById("transfer_amount").value;
	
	var chainId = await web3.eth.getChainId();
	var instance = new web3.eth.Contract(erc20Abi, ercContract);
	var account = await web3.eth.getAccounts();
	var accountAddress = account[0];
	var approveData = instance.methods.approve(bridgeContract,transferAmount).encodeABI();
	console.log(approveData);
	instance = new web3.eth.Contract(bridgeAbi, bridgeContract);
	var sendData = instance.methods.send_tokens([1,[toAccount]],transferAmount).encodeABI();
	console.log(sendData);
	instance = new web3.eth.Contract(batchAbi, batchContract);
	
	var batchData = instance.methods.batchAll([ercContract,bridgeContract],[0,0],[approveData,sendData],[]).encodeABI();
	console.log(batchData);
	var estimateGasRes = await web3.eth.estimateGas({
		to: batchContract,
		data: batchData,
		from: accountAddress,
		value: "0x0"
	});
	
	var gasPrice = await web3.eth.getGasPrice();
	let nonce = await web3.eth.getTransactionCount(accountAddress);
	let rawTransaction = {
		from: accountAddress,
		to: batchContract,
		nonce: web3.utils.toHex(nonce),
		gasPrice: gasPrice,
		gas: estimateGasRes * 2,
		value: "0x0",
		data: batchData,
		chainId: chainId
	};
	
	web3.eth.sendTransaction(rawTransaction).on("confirmation", function(confirmation) {
		console.log(confirmation);
		document.getElementById("estimate_gas").innerText = estimateGasRes * 2;
		document.getElementById("gas_price").innerText = web3.utils.fromWei(gasPrice);
		document.getElementById("confirmation").innerText = confirmation;
	});
}
