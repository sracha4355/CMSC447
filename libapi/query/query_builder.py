import json
import requests

###
### - only works for GET and POST http methods currently, I think that's all we need to worry about too
### - we aren't posting info to the api anyway
###

'''
Example usage of query builder
obj = QueryBuilder()
get_request_response = obj\
.add_header("key", "value")\
.add_header("token", "tokenvalue")\
.add_param("foo", "data)\
.make_get_request()


- QueryBuilder is a builder class to create http requests and send them with the 
requests library
- I use this class in the other classes to hit endpoints
How it works:
- the params for constructor:
    @url -> pass a string, the http endpoint
    @params -> a dictionary used to store the parameters for the GET requests,
    you can pass a empty dictionary here 
    @headers -> a dictionary used to store the headers for the requests (like auth tokens),
    you can pass a empty dictionary here 
    @data -> a dictionary used to store the data for the POST requests,
    you can pass a empty dictionary here 
The cool part about this class is the methods:
Every method except make_get/post_request returns the value self, meaning 
it returns the instance of the class that the method was called on.
Using this we can chain methods to easily build up the http request, by adding and removing
data into the specific parts we want
For example:
We have add_param() and remove_param that takes in a key and a value to put into the
params dictionary
Just like that we also have a add_header(), remove_header(), add_data(), remove_data()
which just add and remove stuff from the respective dicts.
We can also append to the url variable to add to the http endpoint url
ex: http://spotify/api/v1
add_url('test') makes the url array this [http://spotify/api/v1, test]
now when we call make_get/post_request the final url generated is
http://spotify/api/v1/test

And of course, the params, headers, and data are included into the request

Note: remove_url just removes the last string from the array,
so treating removing elements like popping from a stack
'''

class QueryBuilder:
    """
    QueryBuilder is a builder class to create HTTP requests and send them with the requests library.
    It supports GET and POST methods.
    """
    def __init__(self, url="", params={}, headers={}, data={}):
        """
        Initialize the QueryBuilder instance.

        Args:
            url (str): The HTTP endpoint URL.
            params (dict): Parameters for GET requests.
            headers (dict): Headers for requests (like auth tokens).
            data (dict): Data for POST requests.
        """
        if url != "":
            self.url = [url]
        else:
            self.url = []
        self.params = params
        self.headers = headers
        self.data = data
        
    def add_params(self, key="", value=""):
        """
        Add parameters to the request.

        Args:
            key (str): The parameter key.
            value (str): The parameter value.

        Returns:
            QueryBuilder: The QueryBuilder instance.
        """
        self.params[key] = value
        return self
    
    def remove_params(self, key="", value=""):
        """
        Remove parameters from the request.

        Args:
            key (str): The parameter key.

        Returns:
            QueryBuilder: The QueryBuilder instance.
        """
        if key in self.params:
            del self.params[key]
        return self
    
    def append_url(self, value=""):
        """
        Append a value to the URL.

        Args:
            value (str): The value to append to the URL.

        Returns:
            QueryBuilder: The QueryBuilder instance.
        """
        self.url.append(value)
        return self
    
    def add_header(self, key="", value=""):
        """
        Add a header to the request.

        Args:
            key (str): The header key.
            value (str): The header value.

        Returns:
            QueryBuilder: The QueryBuilder instance.
        """
        self.headers[key] = value
        return self

    def add_data(self, key="", value=""):
        """
        Add data to the request (for POST requests).

        Args:
            key (str): The data key.
            value (str): The data value.

        Returns:
            QueryBuilder: The QueryBuilder instance.
        """
        self.data[key] = value
        return self

    def remove_data(self, key="", value=""):
        """
        Remove data from the request.

        Args:
            key (str): The data key.

        Returns:
            QueryBuilder: The QueryBuilder instance.
        """
        if key in self.data:
            del self.data[key]
        return self

    def remove_header(self, key="", value=""):
        """
        Remove a header from the request.

        Args:
            key (str): The header key.

        Returns:
            QueryBuilder: The QueryBuilder instance.
        """
        if key in self.headers:
            del self.headers[key]
        return self
    
    def clear(self):
        """
        Clear all parameters, headers, and data from the request.

        Returns:
            QueryBuilder: The QueryBuilder instance.
        """
        self.url = []
        self.params = {}
        self.headers = {}
        self.data = {}
        return self

    def print_headers(self):
        """
        Print the headers.

        Returns:
            QueryBuilder: The QueryBuilder instance.
        """
        print(self.headers)
        return self

    def print_data(self):
        """
        Print the data.

        Returns:
            QueryBuilder: The QueryBuilder instance.
        """
        print(self.data)
        return self

    def make_get_request(self):
        """
        Make a GET request.

        Returns:
            Response: The response from the GET request.
        """
        _url = '/'.join(self.url)
        return requests.get(_url, params=self.params, headers=self.headers)
    
    def make_post_request(self):
        """
        Make a POST request.

        Returns:
            Response: The response from the POST request.
        """
        _url = '/'.join(self.url)
        return requests.post(_url, data=self.data, headers=self.headers)
    
    def add_to_url(self, new):
        """
        Add a value to the URL.

        Args:
            new (str): The value to add to the URL.

        Returns:
            QueryBuilder: The QueryBuilder instance.
        """
        self.url.append(new)
        return self
    
    def remove_from_url(self):
        """
        Remove the last value from the URL.

        Returns:
            QueryBuilder: The QueryBuilder instance.
        """
        self.url.pop(-1)
        return self