#include <iostream>
using namespace std;

void main() {
    int n = 5;
    int mid = n/2;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        for (int k = 1; k <= (2 * i - 1); k++) {
            cout << "*";
        }
        cout << endl;
    }

    for (int i = n; i >= 0; i--) {
        for (int j = 0; j < n - i; j++) {
            cout << " ";
        }
        for (int k = (2 * i - 1); k >= 1; k--) {
            cout << "*";
        }
        cout << endl;
    }

    for (int i = 1; i <= mid; i++) {
        for (int j = 1; j <= mid - i; j++) {
            cout << " ";
        }
        for (int k = 1; k <= (2 * i - 1); k++) {
            cout << "*";
        }
        cout << endl;
    }

    for (int i = mid; i > 0; i--) {
        for (int j = 0; j < mid - i; j++) {
            cout << " ";
        }
        for (int k = (2 * i - 1); k >= 1; k--) {
            cout << "*";
        }
        cout << endl;
    }

   for (int i = 0; i < n; i++) {
        int stars = (i <= mid) ? 2 * i + 1 : 2 * (n - i - 1) + 1;
        for (int j = 0; j < stars; j++) {
            cout << "*";
        }

        cout << endl;
    }

    int digit=1;
   for (int i = 1; i <= n; i++)
    {   
        for (int j = 1; j<=i; j++){
            if ((i+j)%2==0){
                cout<<"1";
            }else cout<<"0";
        }
        cout<< endl;
    }
}