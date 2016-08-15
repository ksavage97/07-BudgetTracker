var app = angular.module("app", []);

app.controller("MainController", function($scope) {

	$scope.allIncomes = [];

	//what happens when the "+ add income" button is pressed!
	$scope.addNewIncomeEntry = function(incomeEntry) {
        var income = { 
        	"newIncDesc": $scope.newIncomeDesc,
        	"newIncAmount": $scope.newIncomeAmount
    	};
	 	$scope.allIncomes.push(income);

	 	//clears income input fields
	 	$scope.newIncomeDesc=null;
	 	$scope.newIncomeAmount=null;
	};

	$scope.allExpenses = [];

	//what happens when the "+ add expense" button is pressed!
	$scope.addNewExpenseEntry = function(expenseEntry) {
		var expense = {
			"newExpDesc": $scope.newExpenseDesc,
			"newExpAmount": $scope.newExpenseAmount
		};
		$scope.allExpenses.push(expense);

		//clears expense input fields
		$scope.newExpenseDesc=null;
		$scope.newExpenseAmount=null;
	};

	//total income
	var totalIncomeVar = $scope.totalIncome = function(){
    var total = 0;
    for(var i = 0; i < $scope.allIncomes.length; i++){
        var incTotal = $scope.allIncomes[i];
        total += incTotal.newIncAmount;
    }
    return total;
	};

	//total expense
	var totalExpensesVar = $scope.totalExpenses = function(){
    var total = 0;
    for(var i = 0; i < $scope.allExpenses.length; i++){
        var expTotal = $scope.allExpenses[i];
        total += expTotal.newExpAmount;
        console.log(total);
    }
    return total;
	};


	//remove an income entry
	    $scope.removeIncome = function(income, $index) {
        $scope.allIncomes.splice($index, 1);
    };

    //remove an expense entry
    $scope.removeExpense = function(expense, $index) {
        $scope.allExpenses.splice($index, 1);
    };


});