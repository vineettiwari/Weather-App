var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('AppCtrl', ['$scope', function ($scope) {

    /* This data cannot be changed */
    var weather = [{
            "high": "53",
            "low": "45",
            "text": "Showers",
            "cityName": "Vancouver"
        },
        {
            "high": "76",
            "low": "61",
            "text": "Partly Cloudy",
            "cityName": "Havana Cuba"
        },
        {
            "high": "77",
            "low": "56",
            "text": "Clear",
            "cityName": "San Diego"
        },
        {
            "high": "82",
            "low": "70",
            "text": "Partly Cloudy",
            "cityName": "Honolulu"
        }
    ];

    $scope.title = "Travel Destinations";

    $scope.selectedWeather = null;

    $scope.sortValue = "";

    $scope.low;
    $scope.high;

    $scope.unit;

    $scope.lowC;
    $scope.highC;
    $scope.lowF;
    $scope.highF;

    $scope.getAllWeather = function () {
        return weather;
    }

    $scope.forecast = $scope.getAllWeather();

    $scope.showDetails = function (element) {
        $scope.selectedWeather = element;

        $scope.lowF = $scope.selectedWeather.low;
        $scope.highF = $scope.selectedWeather.high;

        $scope.lowF = $scope.selectedWeather.low;
        $scope.highF = $scope.selectedWeather.high;
        $scope.lowC = $scope.convertFToC($scope.lowF);
        $scope.highC = $scope.convertFToC($scope.highF);

        if ($scope.unit == null) {
            $scope.unit = "fahrenheit";
            $scope.low = $scope.lowF;
            $scope.high = $scope.highF;
        } else if ($scope.unit === "celsius") {
            $scope.low = $scope.lowC;
            $scope.high = $scope.highC;
        } else if ($scope.unit === "fahrenheit") {
            $scope.low = $scope.lowF;
            $scope.high = $scope.highF;
        }

        console.log(
            "Low in F: " + $scope.lowF + "\n" +
            "High in F: " + $scope.highF + "\n" +
            "Low in C: " + $scope.lowC + "\n" +
            "High in C: " + $scope.highC + "\n"
        );

        console.log("unit: " + $scope.unit);
    }

    $scope.decsSort = function () {
        if ($scope.sortValue != "reverse") {
            $scope.sortValue = "reverse";
        }
    }

    $scope.ascSort = function () {
        if ($scope.sortValue === "reverse") {
            $scope.sortValue = "";
        }
    }

    $scope.convertFToC = function (valueInF) {
        var valueInC = (valueInF - 32) * 5.0 / 9.0;
        return valueInC;
    }

    $scope.toggleUnit = function () {
        if ($scope.unit === "fahrenheit") {
            $scope.unit = "celsius";
            $scope.low = $scope.lowC;
            $scope.high = $scope.highC;
        } else if ($scope.unit === "celsius") {
            $scope.unit = "fahrenheit";
            $scope.low = $scope.lowF;
            $scope.high = $scope.highF;
        }

        console.log("unit: " + $scope.unit);
    }
}]);