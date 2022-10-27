(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\921540\Downloads\TweetAppFrontend-main\TweetAppFrontend-main\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0P5e":
    /*!*******************************************!*\
      !*** ./src/app/services/tweet.service.ts ***!
      \*******************************************/

    /*! exports provided: TweetService */

    /***/
    function P5e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TweetService", function () {
        return TweetService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TweetService = /*#__PURE__*/function () {
        function TweetService(http) {
          _classCallCheck(this, TweetService);

          this.http = http;
        }

        _createClass(TweetService, [{
          key: "getAllUsers",
          value: function getAllUsers() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl + '/users/all');
          }
        }, {
          key: "getUsersByUsername",
          value: function getUsersByUsername(username) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl + "/user/search/".concat(username));
          }
        }, {
          key: "getAllTweetsByUsername",
          value: function getAllTweetsByUsername(username) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl + "/".concat(username));
          }
        }, {
          key: "getAllTweets",
          value: function getAllTweets() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl + '/all');
          }
        }, {
          key: "postTweet",
          value: function postTweet(tweet, username) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl + "/".concat(username, "/add"), tweet);
          }
        }, {
          key: "likeTweet",
          value: function likeTweet(tweetId, username) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl + "/".concat(username, "/like/").concat(tweetId), null);
          }
        }, {
          key: "deleteTweet",
          value: function deleteTweet(tweetId, username) {
            return this.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl + "/".concat(username, "/delete/").concat(tweetId));
          }
        }, {
          key: "updateTweet",
          value: function updateTweet(tweet, username) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl + "/".concat(username, "/update/").concat(tweet.id), tweet);
          }
        }, {
          key: "replyTweet",
          value: function replyTweet(tweetId, tweet, username) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl + "/".concat(username, "/reply/").concat(tweetId), tweet);
          }
        }]);

        return TweetService;
      }();

      TweetService.ɵfac = function TweetService_Factory(t) {
        return new (t || TweetService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      TweetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TweetService,
        factory: TweetService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ConfirmedValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ConfirmedValidator */
      "WOHq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RegisterComponent_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " First Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name only accpect Alphabetic charactor. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_13_div_1_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_13_div_2_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.firstName.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.firstName.errors.pattern);
        }
      }

      function RegisterComponent_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Last Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_19_div_1_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.lastName.errors.required);
        }
      }

      function RegisterComponent_div_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Username is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_25_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Username already exists");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_25_div_1_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_25_div_2_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.username.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.isUsernameUnique);
        }
      }

      function RegisterComponent_div_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_31_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Minium Password length is 6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_31_div_1_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_31_div_2_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors == null ? null : ctx_r3.f.password.errors.minlength);
        }
      }

      function RegisterComponent_div_37_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirm Password is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_37_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password and Confirm Password must be match.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_37_div_1_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_37_div_2_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.f.confirm_password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.f.confirm_password.errors.confirmedValidator);
        }
      }

      function RegisterComponent_div_43_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_43_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email already exists");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_43_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valide Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_43_div_1_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_43_div_2_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RegisterComponent_div_43_div_3_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.isEmailUnique);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f.email.errors.email);
        }
      }

      function RegisterComponent_div_49_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Contact Number is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_49_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Contact Number can only be a 10 digit number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_49_div_1_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_49_div_2_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.f.contactNumber.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.f.contactNumber.errors.pattern);
        }
      }

      function RegisterComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Registered successfully! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_span_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 25);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(authService, router, formBuilder) {
          _classCallCheck(this, RegisterComponent);

          this.authService = authService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.submitted = false;
          this.loading = false;
          this.isEmailUnique = true;
          this.isUsernameUnique = true;
          this.success = false;
          this.registerForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[A-ZA-z]{1,}')]],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            contactNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[6-9]{1}[0-9]{9}')]]
          }, {
            validator: Object(_ConfirmedValidator__WEBPACK_IMPORTED_MODULE_1__["ConfirmedValidator"])('password', 'confirm_password')
          });
        }

        _createClass(RegisterComponent, [{
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.submitted = true;

            if (this.registerForm.invalid) {
              return;
            }

            var user = {
              id: null,
              username: this.f.username.value,
              password: this.f.password.value,
              email: this.f.email.value,
              firstName: this.f.firstName.value,
              lastName: this.f.lastName.value,
              contactNumber: this.f.contactNumber.value
            };
            this.loading = true;
            this.authService.register(user).subscribe(function (response) {
              _this.loading = false;

              if (response.username !== undefined) {
                _this.success = true;

                _this.router.navigateByUrl('login');
              }
            }, function (err) {
              _this.loading = false;

              if (err.message.includes('duplicate key') && err.message.includes('username')) {
                _this.isUsernameUnique = false;
              }

              if (err.message.includes('duplicate key') && err.message.includes('email')) {
                _this.isEmailUnique = false;
              }
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 58,
        vars: 29,
        consts: [["src", "../../assets/tweet1.png", 2, "width", "40px", "height", "40px"], [1, "login"], [3, "formGroup", "ngSubmit"], [1, "d-flex", "justify-content-center", "align-items-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "30", "fill", "white", "viewBox", "0 0 16 16", 1, "bi", "bi-file-lock"], ["d", "M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z"], ["d", "M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"], ["type", "text", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "username", "placeholder", "Username", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], ["formControlName", "confirm_password", "id", "confirm_password", "type", "password", "placeholder", "Confirm Password", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "text", "formControlName", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "contactNumber", "placeholder", "Contact Number", 1, "form-control", 3, "ngClass"], ["class", "text-success mb-3", 4, "ngIf"], [2, "background-color", "#4CAF50", "/* green */\n                border", "none", "color", "white", "padding", "3px 12px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "../login", 1, "text-info"], ["type", "submit", 2, "background-color", "rgb(234, 68, 68)", "/* green */\n                 border", "none", "color", "white", "padding", "3px 12px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px"], [1, "invalid-feedback"], [4, "ngIf"], [1, "alert", "alert-danger"], [1, "text-success", "mb-3"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "TweeT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "First Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 3, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Last Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "User Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 3, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, RegisterComponent_div_31_Template, 3, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Confirm Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, RegisterComponent_div_37_Template, 3, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, RegisterComponent_div_43_Template, 4, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Contact ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, RegisterComponent_div_49_Template, 3, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, RegisterComponent_div_51_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, RegisterComponent_span_53_Template, 1, 0, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.firstName.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstName.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.lastName.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastName.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.username.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.username.errors || !ctx.isUsernameUnique));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.confirm_password.touched && ctx.f.confirm_password.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c0, ctx.submitted && ctx.f.email.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.email.errors || !ctx.isEmailUnique));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c0, ctx.submitted && ctx.f.contactNumber.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.contactNumber.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.success);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: ["body[_ngcontent-%COMP%]  \r\n{  \r\n    margin: 0;  \r\n    padding: 0;  \r\n    background-color:#030d12ba;  \r\n    font-family: 'Arial';  \r\n    \r\n}  \r\n\r\n.login[_ngcontent-%COMP%]{  \r\n        width: 382px;  \r\n        \r\n        overflow: hidden;  \r\n        margin: auto;  \r\n        margin: 20 0 0 450px;  \r\n        padding: 60px;  \r\n        background: #080808;  \r\n        border-radius: 15px ; \r\n        opacity: 0.8; \r\n          \r\n}  \r\n\r\n.button[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50; \r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n  }  \r\n\r\nh2[_ngcontent-%COMP%]{  \r\n    text-align: center;  \r\n    color: #000101;  \r\n    padding: 20px;  \r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}  \r\n\r\nlabel[_ngcontent-%COMP%]{  \r\n    color: #fdfefe;  \r\n    font-size: 17px;  \r\n}  \r\n\r\n#Uname[_ngcontent-%COMP%]{  \r\n    width: 300px;  \r\n    height: 30px;  \r\n    border: none;  \r\n    border-radius: 3px;  \r\n    padding-left: 8px;  \r\n}  \r\n\r\n#Pass[_ngcontent-%COMP%]{  \r\n    width: 300px;  \r\n    height: 30px;  \r\n    border: none;  \r\n    border-radius: 3px;  \r\n    padding-left: 8px;  \r\n      \r\n}  \r\n\r\n#log[_ngcontent-%COMP%]{  \r\n    width: 300px;  \r\n    height: 30px;  \r\n    border: none;  \r\n    border-radius: 17px;  \r\n    padding-left: 7px;  \r\n    color: blue;  \r\n  \r\n  \r\n}  \r\n\r\nspan[_ngcontent-%COMP%]{  \r\n    color: white;  \r\n    font-size: 17px;  \r\n}  \r\n\r\na[_ngcontent-%COMP%]{  \r\n    float: right;  \r\n    background-color: grey;  \r\n}  \r\n\r\ninput[_ngcontent-%COMP%]{\r\n    width: 250px;;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsb0JBQW9COztBQUV4Qjs7QUFFQTtRQUNRLFlBQVk7O1FBRVosZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsWUFBWTs7QUFFcEI7O0FBQ0E7SUFDSSx5QkFBeUIsRUFBRSxVQUFVO0lBQ3JDLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYiwyREFBMkQ7QUFDL0Q7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVzs7O0FBR2Y7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5ICBcclxueyAgXHJcbiAgICBtYXJnaW46IDA7ICBcclxuICAgIHBhZGRpbmc6IDA7ICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAzMGQxMmJhOyAgXHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJzsgIFxyXG4gICAgXHJcbn0gIFxyXG5cclxuLmxvZ2lueyAgXHJcbiAgICAgICAgd2lkdGg6IDM4MnB4OyAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgIFxyXG4gICAgICAgIG1hcmdpbjogYXV0bzsgIFxyXG4gICAgICAgIG1hcmdpbjogMjAgMCAwIDQ1MHB4OyAgXHJcbiAgICAgICAgcGFkZGluZzogNjBweDsgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwODA4MDg7ICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDsgXHJcbiAgICAgICAgb3BhY2l0eTogMC44OyBcclxuICAgICAgICAgIFxyXG59ICBcclxuLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuaDJ7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgY29sb3I6ICMwMDAxMDE7ICBcclxuICAgIHBhZGRpbmc6IDIwcHg7ICBcclxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59ICBcclxubGFiZWx7ICBcclxuICAgIGNvbG9yOiAjZmRmZWZlOyAgXHJcbiAgICBmb250LXNpemU6IDE3cHg7ICBcclxufSAgXHJcbiNVbmFtZXsgIFxyXG4gICAgd2lkdGg6IDMwMHB4OyAgXHJcbiAgICBoZWlnaHQ6IDMwcHg7ICBcclxuICAgIGJvcmRlcjogbm9uZTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDsgIFxyXG59ICBcclxuI1Bhc3N7ICBcclxuICAgIHdpZHRoOiAzMDBweDsgIFxyXG4gICAgaGVpZ2h0OiAzMHB4OyAgXHJcbiAgICBib3JkZXI6IG5vbmU7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7ICBcclxuICAgICAgXHJcbn0gIFxyXG4jbG9neyAgXHJcbiAgICB3aWR0aDogMzAwcHg7ICBcclxuICAgIGhlaWdodDogMzBweDsgIFxyXG4gICAgYm9yZGVyOiBub25lOyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4OyAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDsgIFxyXG4gICAgY29sb3I6IGJsdWU7ICBcclxuICBcclxuICBcclxufSAgXHJcbnNwYW57ICBcclxuICAgIGNvbG9yOiB3aGl0ZTsgIFxyXG4gICAgZm9udC1zaXplOiAxN3B4OyAgXHJcbn0gIFxyXG5heyAgXHJcbiAgICBmbG9hdDogcmlnaHQ7ICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7ICBcclxufSAgXHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDI1MHB4OztcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "2E3X":
    /*!******************************************************!*\
      !*** ./src/app/reply-tweet/reply-tweet.component.ts ***!
      \******************************************************/

    /*! exports provided: ReplyTweetComponent */

    /***/
    function E3X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReplyTweetComponent", function () {
        return ReplyTweetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReplyTweetComponent = /*#__PURE__*/function () {
        function ReplyTweetComponent() {
          _classCallCheck(this, ReplyTweetComponent);
        }

        _createClass(ReplyTweetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReplyTweetComponent;
      }();

      ReplyTweetComponent.ɵfac = function ReplyTweetComponent_Factory(t) {
        return new (t || ReplyTweetComponent)();
      };

      ReplyTweetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReplyTweetComponent,
        selectors: [["app-reply-tweet"]],
        decls: 2,
        vars: 0,
        template: function ReplyTweetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reply-tweet works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBseS10d2VldC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "6Kw5":
    /*!****************************************!*\
      !*** ./src/app/pipes/date-ago.pipe.ts ***!
      \****************************************/

    /*! exports provided: DateAgoPipe */

    /***/
    function Kw5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function () {
        return DateAgoPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DateAgoPipe = /*#__PURE__*/function () {
        function DateAgoPipe() {
          _classCallCheck(this, DateAgoPipe);
        }

        _createClass(DateAgoPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (value) {
              var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
              if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
              var intervals = {
                year: 31536000,
                month: 2592000,
                week: 604800,
                day: 86400,
                hour: 3600,
                minute: 60,
                second: 1
              };
              var counter;

              for (var i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0) if (counter === 1) {
                  return counter + ' ' + i + ' ago'; // singular (1 day ago)
                } else {
                  return counter + ' ' + i + 's ago'; // plural (2 days ago)
                }
              }
            }

            return value;
          }
        }]);

        return DateAgoPipe;
      }();

      DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) {
        return new (t || DateAgoPipe)();
      };

      DateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "dateAgo",
        type: DateAgoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        //ApiUrl: "http://localhost:8090/api/v1.0/tweets"
        ApiUrl: "http://tweetapp168-env.eba-vwynunah.ap-northeast-1.elasticbeanstalk.com/api/v1.0/tweets"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "GuPa":
    /*!**********************************************************!*\
      !*** ./src/app/reset/reset-pass/reset-pass.component.ts ***!
      \**********************************************************/

    /*! exports provided: ResetPassComponent */

    /***/
    function GuPa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPassComponent", function () {
        return ResetPassComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_register_ConfirmedValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/register/ConfirmedValidator */
      "WOHq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ResetPassComponent_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ResetPassComponent_div_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Minium Password length is 6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ResetPassComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ResetPassComponent_div_10_div_1_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ResetPassComponent_div_10_div_2_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors == null ? null : ctx_r0.f.password.errors.minlength);
        }
      }

      function ResetPassComponent_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirm Password is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ResetPassComponent_div_15_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password and Confirm Password must be match.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ResetPassComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ResetPassComponent_div_15_div_1_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ResetPassComponent_div_15_div_2_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.confirm_password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.confirm_password.errors.confirmedValidator);
        }
      }

      function ResetPassComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "User does not exist!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ResetPassComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 19);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var ResetPassComponent = /*#__PURE__*/function () {
        function ResetPassComponent(formBuilder, authService, router) {
          _classCallCheck(this, ResetPassComponent);

          this.formBuilder = formBuilder;
          this.authService = authService;
          this.router = router;
          this.submitted = false;
          this.invalid = false;
          this.passwordResetComplete = false;
        }

        _createClass(ResetPassComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.authService.getCurrentUser();
            this.resetPasswordForm = this.formBuilder.group({
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
              confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
            }, {
              validator: Object(src_app_register_ConfirmedValidator__WEBPACK_IMPORTED_MODULE_1__["ConfirmedValidator"])('password', 'confirm_password')
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.resetPasswordForm.controls;
          }
        }, {
          key: "getPassword",
          value: function getPassword() {
            return this.resetPasswordForm.get('password').value;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            console.log('Submitted');
            this.submitted = true;

            if (this.resetPasswordForm.invalid) {
              return;
            }

            this.loading = true;
            this.authService.resetPassword(this.currentUser.username, this.getPassword()).subscribe(function (data) {
              _this2.loading = false;

              if ((data.resetStatus !== undefined || data.resetStatus !== null) && data.resetStatus == 'success') {
                if (confirm("Password reset done please login again")) {
                  _this2.authService.setCurrentUser(null);
                }

                _this2.authService.setCurrentUser(null);

                _this2.router.navigate(['']);
              }

              _this2.passwordResetComplete = true;
            });
          }
        }]);

        return ResetPassComponent;
      }();

      ResetPassComponent.ɵfac = function ResetPassComponent_Factory(t) {
        return new (t || ResetPassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ResetPassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ResetPassComponent,
        selectors: [["app-reset-pass"]],
        decls: 21,
        vars: 9,
        consts: [[1, "col-md-4", "offset-md-4", "mt-5"], [1, "card"], [1, "card-header", 2, "background", "#79a9e0"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "confirm_password"], ["formControlName", "confirm_password", "id", "confirm_password", "type", "password", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "mb-3 text-danger", 4, "ngIf"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "alert", "alert-danger"], [1, "mb-3", "text-danger"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ResetPassComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Password Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ResetPassComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ResetPassComponent_div_10_Template, 3, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ResetPassComponent_div_15_Template, 3, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ResetPassComponent_div_16_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ResetPassComponent_span_19_Template, 1, 0, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Reset ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.confirm_password.touched && ctx.f.confirm_password.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Tweet App';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "UMdc":
    /*!**************************************************!*\
      !*** ./src/app/user-list/user-list.component.ts ***!
      \**************************************************/

    /*! exports provided: UserListComponent */

    /***/
    function UMdc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
        return UserListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_tweet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/tweet.service */
      "0P5e");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a1) {
        return ["/tweets", a1];
      };

      function UserListComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", user_r1.username == ctx_r0.currentUser.username ? "card-img-top" : "card-img-top grayscale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, user_r1.username));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.email, " ");
        }
      }

      var UserListComponent = /*#__PURE__*/function () {
        function UserListComponent(formBuilder, router, authService, tweetService) {
          _classCallCheck(this, UserListComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.authService = authService;
          this.tweetService = tweetService;
        }

        _createClass(UserListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (!this.authService.isLoggedIn()) {
              this.router.navigateByUrl('login');
            }

            this.currentUser = this.authService.getCurrentUser();
            this.tweetService.getAllUsers().subscribe(function (data) {
              return _this3.userList = data;
            });
          }
        }]);

        return UserListComponent;
      }();

      UserListComponent.ɵfac = function UserListComponent_Factory(t) {
        return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tweet_service__WEBPACK_IMPORTED_MODULE_4__["TweetService"]));
      };

      UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserListComponent,
        selectors: [["app-user-list"]],
        decls: 6,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "col-md-6"], [1, "row", "row-col-5", "g-4"], [4, "ngFor", "ngForOf"], [1, "card", "ml-5", "col", "mt-3", 2, "width", "18rem"], ["src", "../../assets/email.jpg", "alt", "...", 2, "width", "50px", "height", "50px", 3, "ngClass"], [1, "card-body"], [1, "card-title"], [1, "link-primary", 3, "routerLink"], [1, "card-text"]],
        template: function UserListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserListComponent_div_5_Template, 13, 6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "WOHq":
    /*!************************************************!*\
      !*** ./src/app/register/ConfirmedValidator.ts ***!
      \************************************************/

    /*! exports provided: ConfirmedValidator */

    /***/
    function WOHq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmedValidator", function () {
        return ConfirmedValidator;
      });

      function ConfirmedValidator(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
          }

          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              confirmedValidator: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _tweet_list_tweet_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tweet-list/tweet-list.component */
      "vO2/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pipes/date-ago.pipe */
      "6Kw5");
      /* harmony import */


      var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./user-list/user-list.component */
      "UMdc");
      /* harmony import */


      var _reset_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./reset/reset-pass/reset-pass.component */
      "GuPa");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _services_TokenInterceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./services/TokenInterceptor */
      "wpw0");
      /* harmony import */


      var _services_ErrorInterceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./services/ErrorInterceptor */
      "xaUa");
      /* harmony import */


      var _edit_tweet_edit_tweet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./edit-tweet/edit-tweet.component */
      "vOLD");
      /* harmony import */


      var _reply_tweet_reply_tweet_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./reply-tweet/reply-tweet.component */
      "2E3X");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
          useClass: _services_TokenInterceptor__WEBPACK_IMPORTED_MODULE_19__["TokenInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
          useClass: _services_ErrorInterceptor__WEBPACK_IMPORTED_MODULE_20__["ErrorInterceptor"],
          multi: true
        }, {
          provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_DEFAULT_OPTIONS"],
          useValue: {
            hasBackdrop: false
          }
        }, {
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
          useValue: {
            appearance: 'fill'
          }
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _tweet_list_tweet_list_component__WEBPACK_IMPORTED_MODULE_7__["TweetListComponent"], _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_9__["DateAgoPipe"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__["UserListComponent"], _reset_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_11__["ResetPassComponent"], _edit_tweet_edit_tweet_component__WEBPACK_IMPORTED_MODULE_21__["EditTweetComponent"], _reply_tweet_reply_tweet_component__WEBPACK_IMPORTED_MODULE_22__["ReplyTweetComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"]]
        });
      })();
      /***/

    },

    /***/
    "bUp/":
    /*!***************************************!*\
      !*** ./src/app/services/jwt.guard.ts ***!
      \***************************************/

    /*! exports provided: JwtGuard */

    /***/
    function bUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtGuard", function () {
        return JwtGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var JwtGuard = /*#__PURE__*/function () {
        // using this we can navigate on error
        function JwtGuard(router, authService) {
          _classCallCheck(this, JwtGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(JwtGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return true; // if(this.authService.isLoggedIn)
            //   return true;
            // else {
            //   alert('You need to login first');
            //   this.router.navigate(['/login'])
            //   return false;
            // }
          }
        }, {
          key: "canActivateChild",
          value: function canActivateChild(childRoute, state) {
            return true;
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate(component, currentRoute, currentState, nextState) {
            return true;
          }
        }]);

        return JwtGuard;
      }();

      JwtGuard.ɵfac = function JwtGuard_Factory(t) {
        return new (t || JwtGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      JwtGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtGuard,
        factory: JwtGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "kWWo":
    /*!********************************************!*\
      !*** ./src/app/navbar/navbar.component.ts ***!
      \********************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function kWWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(authService, router, observer) {
          _classCallCheck(this, NavbarComponent);

          this.authService = authService;
          this.router = router;
          this.observer = observer;
          this.username = sessionStorage.getItem("username");
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.authService.isLoggedIn()) {
              this.router.navigateByUrl('login');
            }

            this.currentUser = this.authService.getCurrentUser();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            this.observer.observe(['(max-width: 800px)']).subscribe(function (res) {
              if (res.matches) {
                _this4.sidenav.mode = 'over';

                _this4.sidenav.close();
              } else {
                _this4.sidenav.mode = 'side';

                _this4.sidenav.open();
              }
            });
          }
        }, {
          key: "doLogOut",
          value: function doLogOut() {
            this.authService.setCurrentUser(null);
            this.router.navigateByUrl("/");
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        viewQuery: function NavbarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__["MatSidenav"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
          }
        },
        decls: 57,
        vars: 6,
        consts: [[1, "mat-elevation-z8"], [2, "margin-right", "10px"], [1, "row", 2, "text-align", "center"], [1, "column", 2, "display", "flex", "justify-content", "flex-end"], [1, "icon-text", 2, "display", "flex", "justify-content", "flex-end"], ["mat-button", "", 2, "width", "100%", "display", "flex", "align-items", "center", "justify-content", "flex-start", "font-size", "1rem", "padding-right", "8px", "box-shadow", "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", "margin-left", "30px"], [1, "name"], ["routerLink", "/home"], ["mat-button", "", 2, "width", "100%", "display", "flex", "align-items", "center", "justify-content", "flex-start", "font-size", "1rem", "box-shadow", "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", "margin-left", "10px", "padding-right", "12.5px"], ["routerLink", "tweets/all"], ["mat-button", "", 2, "width", "100%", "display", "flex", "align-items", "center", "justify-content", "flex-start", "font-size", "1rem", "padding-right", "12.5px", "box-shadow", "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", "margin-left", "10px"], ["routerLink", "user-list", 2, "color", "#000000"], [3, "routerLink"], [1, "column", 2, "display", "flex", "justify-content", "flex-end", "margin-left", "470px"], ["mat-button", "", 2, "width", "100%", "display", "flex", "align-items", "center", "justify-content", "flex-start", "font-size", "1rem", "padding-right", "5px", "box-shadow", "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"], ["routerLink", "logout", "aria-hidden", "true", 3, "click"], [2, "display", "flex", "justify-content", "flex-end"], ["src", "../../assets/email.jpg", 2, "width", "50px", "height", "50px", "margin-right", "10px", "margin-top", "20px"], [2, "list-style", "none", "color", "#8ce476"], [2, "font-size", "small"], [1, "content", "mat-elevation-z8"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_34_listener() {
              return ctx.doLogOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "-------------------");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome!!! ", ctx.currentUser.username, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "passwordReset/", ctx.currentUser.username, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.currentUser.firstName, " ", ctx.currentUser.lastName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+91 ", ctx.currentUser.contactNumber, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentUser.email);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["mat-toolbar[_ngcontent-%COMP%] {\r\n    background:#8ce476;\r\n    color:rgb(2, 3, 43);\r\n  }\r\n  \r\n  mat-sidenav[_ngcontent-%COMP%] {\r\n    margin: 16px;\r\n    width: 250px;\r\n    border-right: none;\r\n    background: #8ce476;\r\n    color: rgb(2, 3, 43);\r\n    border-radius: 10px;\r\n    padding: 16px;\r\n    text-align: center;\r\n    word-wrap: break-word;\r\n  }\r\n  \r\n  .logo[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n  \r\n  .content[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 99px);\r\n    border-radius: 10px;\r\n    margin: 16px;\r\n    margin-left: 32px;\r\n    \r\n    padding: 16px;\r\n  \r\n    overflow: auto;\r\n  }\r\n  \r\n  mat-sidenav-container[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 65px);\r\n  }\r\n  \r\n  .menu-button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    font-size: 1rem;\r\n    \r\n  }\r\n  \r\n  mat-icon[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n  }\r\n  \r\n  .avatar[_ngcontent-%COMP%] {\r\n    margin-top: 16px;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .name[_ngcontent-%COMP%] {\r\n    font-size: smaller;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  ul[_ngcontent-%COMP%]{\r\n    list-style-type:  circle;\r\n    \r\n    padding: 0;\r\n\r\n    font-size: small;\r\n    line-height: 18px;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n}\r\n  \r\n  .example-spacer[_ngcontent-%COMP%]{\r\n  flex:1 1 auto;\r\n}\r\n  \r\n  .icon-text[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n  \r\n  \r\n  \r\n  .row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n  \r\n  mat-divider[_ngcontent-%COMP%] {\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsYUFBYTs7SUFFYixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGVBQWU7O0VBRWpCOztFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLHdCQUF3Qjs7SUFFeEIsVUFBVTs7SUFFVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiw2QkFBNkI7QUFDakM7O0VBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0VBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztFQUVBOzs7R0FHRzs7RUFDSDtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztFQUVFO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7RUFDNUMiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiM4Y2U0NzY7XHJcbiAgICBjb2xvcjpyZ2IoMiwgMywgNDMpO1xyXG4gIH1cclxuICBcclxuICBtYXQtc2lkZW5hdiB7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGNlNDc2O1xyXG4gICAgY29sb3I6IHJnYigyLCAzLCA0Myk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ28ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk5cHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBcclxuICB9XHJcbiAgbWF0LWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hdmF0YXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIHVse1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiAgY2lyY2xlO1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmV4YW1wbGUtc3BhY2Vye1xyXG4gIGZsZXg6MSAxIGF1dG87XHJcbn1cclxuXHJcblxyXG4uaWNvbi10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIC5jb2x1bW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAzMy4zMyU7XHJcbn0gKi9cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4gIFxyXG4gIG1hdC1kaXZpZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgICAgIl19 */"]
      });
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AuthService, [{
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(username) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ApiUrl + "/".concat(username, "/forgot"));
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(username, password) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ApiUrl + '/reset', {
              username: username,
              password: password
            });
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return JSON.parse(localStorage.getItem('currentUser'));
          }
        }, {
          key: "setCurrentUser",
          value: function setCurrentUser(user) {
            if (user == null) {
              localStorage.removeItem('currentUser');
              return;
            }

            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            if (localStorage.getItem('currentUser') != null) {
              return true;
            }

            return false;
          } // login(username: string, password: string) {
          //   return this.http.post(environment.ApiUrl + '/login', { username,password});
          // }

        }, {
          key: "login",
          value: function login(username, password) {
            var _this5 = this;

            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ApiUrl + '/login', {
              username: username,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              console.log(user);
              console.log("---" + user.token);
              _this5.token = user.token;

              _this5.currentUserSubject.next(user);

              return user;
            }));
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return this.token;
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
          }
        }, {
          key: "register",
          value: function register(user) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ApiUrl + '/register', user);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vO2/":
    /*!****************************************************!*\
      !*** ./src/app/tweet-list/tweet-list.component.ts ***!
      \****************************************************/

    /*! exports provided: TweetListComponent */

    /***/
    function vO2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TweetListComponent", function () {
        return TweetListComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_tweet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/tweet.service */
      "0P5e");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/date-ago.pipe */
      "6Kw5");

      function TweetListComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Tweet text is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TweetListComponent_div_14_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Tweet content cannot exceed 144 characters! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TweetListComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TweetListComponent_div_14_div_1_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TweetListComponent_div_14_div_2_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.tweetBody.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.tweetBody.errors.maxlength);
        }
      }

      function TweetListComponent_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span");
        }
      }

      function TweetListComponent_span_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TweetListComponent_span_20_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.addTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Tag ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function TweetListComponent_span_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TweetListComponent_span_21_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.removeTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " X ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r3.submitted && ctx_r3.f.tweetTag.errors));
        }
      }

      function TweetListComponent_div_24_small_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tweet_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", tweet_r13.tweetTag, "");
        }
      }

      function TweetListComponent_div_24_span_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TweetListComponent_div_24_span_18_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var tweet_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.openEditTweetPopup(tweet_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TweetListComponent_div_24_span_18_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var tweet_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.deleteTweet(tweet_r13.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TweetListComponent_div_24_div_25_div_1_small_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var replyTweet_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", replyTweet_r24.tweetTag, "");
        }
      }

      function TweetListComponent_div_24_div_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "dateAgo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TweetListComponent_div_24_div_25_div_1_small_15_Template, 2, 1, "small", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var replyTweet_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", replyTweet_r24.user.username, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 4, replyTweet_r24.postDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", replyTweet_r24.tweetName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", replyTweet_r24.tweetTag != null);
        }
      }

      function TweetListComponent_div_24_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TweetListComponent_div_24_div_25_div_1_Template, 16, 6, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tweet_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", tweet_r13.replies);
        }
      }

      function TweetListComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "dateAgo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TweetListComponent_div_24_small_15_Template, 2, 1, "small", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TweetListComponent_div_24_span_18_Template, 5, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TweetListComponent_div_24_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

            var tweet_r13 = ctx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r28.likeTweet(tweet_r13.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TweetListComponent_div_24_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

            var tweet_r13 = ctx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r30.openReplyTweetPopup(tweet_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TweetListComponent_div_24_div_25_Template, 2, 1, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tweet_r13 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", tweet_r13.user.username == ctx_r4.currentUser.username ? "card-img" : "card-img grayscale");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", tweet_r13.user.username, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, tweet_r13.postDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tweet_r13.tweetName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tweet_r13.tweetTag != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tweet_r13.user.username == ctx_r4.currentUser.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tweet_r13.likes, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tweet_r13.replies.length > 0);
        }
      }

      function TweetListComponent_span_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TweetListComponent_span_58_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r31.addTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TweetListComponent_span_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TweetListComponent_span_59_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r33.removeTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r6.replySubmitted && ctx_r6.replyTweetForm.controls.tweetTag.errors));
        }
      }

      var TweetListComponent = /*#__PURE__*/function () {
        function TweetListComponent(formBuilder, router, authService, tweetService, route, dialog) {
          _classCallCheck(this, TweetListComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.authService = authService;
          this.tweetService = tweetService;
          this.route = route;
          this.dialog = dialog;
          this.loading = false;
          this.submitted = false;
          this.editSubmitted = false;
          this.replySubmitted = false;
          this.tweetList = [];
          this.currentTweet = {
            id: null,
            tweetName: null,
            postDate: null,
            likes: 0,
            user: null,
            replies: null,
            tweetTag: null
          };
          this.addTagClicked = false;
        }

        _createClass(TweetListComponent, [{
          key: "addTag",
          value: function addTag() {
            this.addTagClicked = true;
          }
        }, {
          key: "removeTag",
          value: function removeTag() {
            this.addTagClicked = false;
          }
        }, {
          key: "likeTweet",
          value: function likeTweet(tweetId) {
            var _this6 = this;

            this.tweetService.likeTweet(tweetId, this.currentUser.username).subscribe(function (data) {
              _this6.refreshTweets();
            });
          }
        }, {
          key: "deleteTweet",
          value: function deleteTweet(tweetId) {
            var _this7 = this;

            this.tweetService.deleteTweet(tweetId, this.currentUser.username).subscribe(function (data) {
              return _this7.refreshTweets();
            });
          }
        }, {
          key: "openEditTweetPopup",
          value: function openEditTweetPopup(tweet) {
            this.currentTweet = tweet;
            console.log("current tweet:", this.currentTweet);
            console.log("tweet: ", tweet);
            $('#editModal').appendTo("body").modal('show'); //for Mat Dialog
            // const editDialogconfig=new MatDialogConfig();
            // editDialogconfig.disableClose=true;
            // editDialogconfig.autoFocus=true;
            // editDialogconfig.data=tweet;
            // const editDialogRef=this.dialog.open(EditTweetComponent,editDialogconfig)
            // editDialogRef.afterClosed().subscribe(
            //   editDate=>console.log("from dialog ",editDate)
            // )
          }
        }, {
          key: "openReplyTweetPopup",
          value: function openReplyTweetPopup(tweet) {
            this.currentTweet = tweet;
            $('#replyModal').appendTo("body").modal('show');
          }
        }, {
          key: "editTweetSubmit",
          value: function editTweetSubmit() {
            var _this8 = this;

            this.editSubmitted = true;
            this.currentTweet.tweetName = this.editTweetForm.controls.tweetBody.value;
            this.tweetService.updateTweet(this.currentTweet, this.currentUser.username).subscribe(function (data) {
              _this8.refreshTweets();

              _this8.currentTweet = {
                id: null,
                tweetName: null,
                postDate: null,
                likes: 0,
                user: null,
                replies: null,
                tweetTag: null
              };
              $('#editModal').modal('hide');
              _this8.addTagClicked = false;
            });
          }
        }, {
          key: "replyTweetSubmit",
          value: function replyTweetSubmit() {
            var _this9 = this;

            this.replySubmitted = true;
            var now = new Date();
            var replyTweet = {
              id: null,
              tweetName: this.replyTweetForm.controls.tweetBody.value,
              postDate: new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString(),
              likes: null,
              user: this.currentUser,
              replies: null,
              tweetTag: this.replyTweetForm.controls.tweetTag.value
            };
            this.tweetService.replyTweet(this.currentTweet.id, replyTweet, this.currentUser.username).subscribe(function (data) {
              _this9.refreshTweets();

              _this9.currentTweet = {
                id: null,
                tweetName: null,
                postDate: null,
                likes: 0,
                user: null,
                replies: null,
                tweetTag: null
              };
              $('#replyModal').modal('hide');
              _this9.addTagClicked = false;
            });
          }
        }, {
          key: "refreshTweets",
          value: function refreshTweets() {
            var _this10 = this;

            this.tweetList.splice(0);

            if (this.currentRouteUsername === null) {
              this.tweetService.getAllTweets().subscribe(function (data) {
                var _this10$tweetList;

                (_this10$tweetList = _this10.tweetList).push.apply(_this10$tweetList, _toConsumableArray(data));
              });
            } else {
              this.tweetService.getAllTweetsByUsername(this.currentRouteUsername).subscribe(function (data) {
                var _this10$tweetList2;

                (_this10$tweetList2 = _this10.tweetList).push.apply(_this10$tweetList2, _toConsumableArray(data));
              });
            }

            console.log(this.tweetList);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this11 = this;

            this.submitted = true;
            this.loading = true;
            var tweet = {
              id: null,
              tweetName: this.f.tweetBody.value,
              postDate: null,
              likes: 0,
              user: null,
              replies: [],
              tweetTag: this.f.tweetTag.value
            };
            this.tweetService.postTweet(tweet, this.currentUser.username).subscribe(function (data) {
              if (data.id !== undefined) {
                _this11.refreshTweets();

                console.log(_this11.tweetList);
                _this11.addTagClicked = false;
              }

              _this11.loading = false;
            }, function (err) {
              _this11.loading = false;
            });
            console.log('x');
          }
        }, {
          key: "trackTweet",
          value: function trackTweet(index, tweet) {
            return tweet.id;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            if (!this.authService.isLoggedIn()) {
              this.router.navigateByUrl('login');
            }

            this.currentUser = this.authService.getCurrentUser();
            this.tweetForm = this.formBuilder.group({
              tweetBody: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(144)]],
              tweetTag: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)]
            });
            this.replyTweetForm = this.formBuilder.group({
              tweetBody: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(144)]],
              tweetTag: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)]
            });
            this.editTweetForm = this.formBuilder.group({
              tweetBody: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(144)]]
            });
            this.currentRouteUsername = this.route.snapshot.paramMap.get('username');

            if (this.currentRouteUsername === null) {
              this.tweetService.getAllTweets().subscribe(function (data) {
                _this12.tweetList = data;
              });
            } else {
              this.tweetService.getAllTweetsByUsername(this.currentRouteUsername).subscribe(function (data) {
                _this12.tweetList = data;
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.tweetForm.controls;
          }
        }]);

        return TweetListComponent;
      }();

      TweetListComponent.ɵfac = function TweetListComponent_Factory(t) {
        return new (t || TweetListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tweet_service__WEBPACK_IMPORTED_MODULE_4__["TweetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
      };

      TweetListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TweetListComponent,
        selectors: [["app-tweet-list"]],
        decls: 60,
        vars: 23,
        consts: [[1, "container-fluid"], [2, "text-align", "center"], ["src", "../../assets/tweet1.png", 2, "width", "40px", "height", "40px"], [1, "row"], [1, "col-md-1"], [1, "col-md-10"], [1, "card", "mb-5", "mt-5", "w-100", 2, "background", "#8ce476"], [1, "card-header", 2, "border-color", "black", "border-radius", "8px", "background", "#1f8fdf"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "tweetBody", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "float-right"], ["type", "submit", 2, "background-color", "#1f8fdf", 3, "disabled"], [4, "ngIf"], ["class", "float-right", "style", "margin-left:50px", 4, "ngIf"], [1, "card-header", 2, "background", "#1f8fdf"], ["class", " row col-10", "style", "margin-bottom: 10px; margin-left: 20px;", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "editModal", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", 2, "background", "#79a9e0"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["formControlName", "tweetBody", 1, "w-100", 3, "placeholder", "ngClass"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "replyModal", 1, "modal", "fade"], ["placeholder", "Your reply here...", "formControlName", "tweetBody", 1, "w-100", 3, "ngClass"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["class", "float-right", 4, "ngIf"], [1, "invalid-feedback"], [1, "btn", "btn-secondary", 2, "background-color", "#1f8fdf", "color", "black", "border-radius", "5px", "border-color", "black", 3, "click"], [1, "float-right", 2, "margin-left", "50px"], [1, "btn", "btn-outline-danger", "btn-sm", "float-right", "ml-3", 3, "click"], ["type", "text", "formControlName", "tweetTag", 3, "ngClass"], [1, "row", "col-10", 2, "margin-bottom", "10px", "margin-left", "20px"], [1, "entete", "card", "h-50"], [1, "row", "no-gutters"], [1, "row", 2, "margin-left", "2px"], ["src", "../../assets/email.jpg", "alt", "...", 2, "width", "45px", "height", "45px", 3, "ngClass"], [1, "card-title", 2, "font-size", "25px"], [1, "float:right"], [1, "text-muted"], [1, "card-text"], ["class", "text-muted", "style", "color:#8ce476;size: 10px;", 4, "ngIf"], [2, "margin-left", "540px"], [1, "btn", "btn-outline-primary", 2, "margin-left", "10px", 3, "click"], [1, "fa", "fa-thumbs-up"], [1, "btn", "btn-outline-info", "ml-2", 3, "click"], [1, "fa", "fa-reply"], [1, "margin-bottom:10px"], ["class", "row col-10", 4, "ngIf"], [1, "text-muted", 2, "color", "#8ce476", "size", "10px"], [1, "btn", "btn-outline-dark", "ml-2", 3, "click"], [1, "fa", "fa-edit"], [1, "btn", "btn-outline-danger", "ml-2", 3, "click"], [1, "fa", "fa-trash"], [1, "row", "col-10"], ["class", "row w-100", 4, "ngFor", "ngForOf"], [1, "row", "w-100"], [1, "card", "mb-2", "mt-2", "w-75", "ml-auto"], ["src", "../../assets/email.jpg", "alt", "...", 1, "card-img", "grayscale", 2, "width", "45px", "height", "45px"], [1, "card-title"], ["class", "text-muted", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"]],
        template: function TweetListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "TweeT");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TweetListComponent_Template_form_ngSubmit_11_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "textarea", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TweetListComponent_div_14_Template, 3, 2, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TweetListComponent_span_18_Template, 1, 0, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Post ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TweetListComponent_span_20_Template, 3, 0, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TweetListComponent_span_21_Template, 4, 3, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, TweetListComponent_div_24_Template, 26, 10, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h5", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Edit Tweet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TweetListComponent_Template_form_ngSubmit_33_listener() {
              return ctx.editTweetSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "textarea", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Close ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Save changes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h5", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Reply Tweet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TweetListComponent_Template_form_ngSubmit_48_listener() {
              return ctx.replyTweetSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "textarea", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TweetListComponent_Template_button_click_54_listener() {
              return ctx.removeTag();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Close ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, TweetListComponent_span_58_Template, 3, 0, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, TweetListComponent_span_59_Template, 4, 3, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.tweetForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.tweetBody.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.tweetBody.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.addTagClicked);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addTagClicked);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tweetList)("ngForTrackBy", ctx.trackTweet);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editTweetForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.currentTweet.tweetName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.editSubmitted && ctx.editTweetForm.controls.tweetBody.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.replyTweetForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentTweet.tweetName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, ctx.replySubmitted && ctx.replyTweetForm.controls.tweetBody.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.addTagClicked);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addTagClicked);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        pipes: [_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["DateAgoPipe"]],
        styles: [".avatar[_ngcontent-%COMP%]{\r\n    margin-top: 16px;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n  background-color: rgb(127, 228, 195);\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 70px;\r\n    background: rgb(236 243 243);\r\n    text-align: right;\r\n    min-width: 50%;\r\n    padding: 10px 5px;\r\n    border-radius: 6px;\r\n    border: 1px solid rgb(236 243 243);\r\n    float: right;\r\n    right: 20px;\r\n  }\r\n.right[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    visibility: visible;\r\n    top: -2px;\r\n    right: -10px;\r\n    border: 10px solid transparent;\r\n    border-top: 10px solid rgb(236 243 243);\r\n  }\r\n.right[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    visibility: visible;\r\n    top: 0px;\r\n    right: -8px;\r\n    border: 10px solid transparent;\r\n    border-top: 10px solid rgb(236 243 243);\r\n    clear: both;\r\n}\r\n.menu-button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  font-size: 1rem;\r\n  \r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n  margin-right: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3ZWV0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHVDQUF1QztFQUN6QztBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLFdBQVc7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoidHdlZXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcntcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjI4LCAxOTUpO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM2IDI0MyAyNDMpO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzNiAyNDMgMjQzKTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucmlnaHQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHJnYigyMzYgMjQzIDI0Myk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yaWdodDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogLThweDtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgcmdiKDIzNiAyNDMgMjQzKTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcbi5tZW51LWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgXHJcbn1cclxubWF0LWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "vOLD":
    /*!****************************************************!*\
      !*** ./src/app/edit-tweet/edit-tweet.component.ts ***!
      \****************************************************/

    /*! exports provided: EditTweetComponent */

    /***/
    function vOLD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTweetComponent", function () {
        return EditTweetComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_tweet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/tweet.service */
      "0P5e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");

      var EditTweetComponent = /*#__PURE__*/function () {
        // addTagClicked: boolean = false;
        // currentRouteUsername: string;
        function EditTweetComponent(editDialogRef, data, formBuilder, tweetService, route, router, authService) {
          _classCallCheck(this, EditTweetComponent);

          this.editDialogRef = editDialogRef;
          this.data = data;
          this.formBuilder = formBuilder;
          this.tweetService = tweetService;
          this.route = route;
          this.router = router;
          this.authService = authService;
          this.tweetList = [];
          this.currentTweet = {
            id: null,
            tweetName: null,
            postDate: null,
            likes: 0,
            user: null,
            replies: null,
            tweetTag: null
          };
        }

        _createClass(EditTweetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.authService.isLoggedIn()) {
              this.router.navigateByUrl('login');
            }

            this.currentUser = this.authService.getCurrentUser();
            this.editTweetForm = this.formBuilder.group({
              tweetBody: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(144)]]
            });
          }
        }, {
          key: "onCloseClick",
          value: function onCloseClick() {
            this.editDialogRef.close();
          }
        }, {
          key: "save",
          value: function save() {
            this.editDialogRef.close(this.editTweetForm.value);
          }
        }, {
          key: "f",
          get: function get() {
            return this.editTweetForm.controls;
          }
        }]);

        return EditTweetComponent;
      }();

      EditTweetComponent.ɵfac = function EditTweetComponent_Factory(t) {
        return new (t || EditTweetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_tweet_service__WEBPACK_IMPORTED_MODULE_3__["TweetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
      };

      EditTweetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: EditTweetComponent,
        selectors: [["app-edit-tweet"]],
        decls: 10,
        vars: 2,
        consts: [["mat-dialog-title", ""], [3, "formGroup"], ["matInput", "", "formControlName", "tweetBody", 3, "placeholder"], [1, "mat-raised-button", 3, "click"], [1, "mat-raised-button", "mat-primary", 3, "click"]],
        template: function EditTweetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit Tweet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "textarea", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditTweetComponent_Template_button_click_6_listener() {
              return ctx.onCloseClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditTweetComponent_Template_button_click_8_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.editTweetForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.data.tweetName);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXR3ZWV0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _reset_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reset/reset-pass/reset-pass.component */
      "GuPa");
      /* harmony import */


      var _tweet_list_tweet_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tweet-list/tweet-list.component */
      "vO2/");
      /* harmony import */


      var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-list/user-list.component */
      "UMdc");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _services_jwt_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/jwt.guard */
      "bUp/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
      }, {
        path: "login/register",
        redirectTo: "register",
        pathMatch: "full"
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
      }, {
        path: 'home',
        component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        canActivate: [_services_jwt_guard__WEBPACK_IMPORTED_MODULE_7__["JwtGuard"]],
        children: [{
          path: "",
          component: _tweet_list_tweet_list_component__WEBPACK_IMPORTED_MODULE_4__["TweetListComponent"],
          canActivate: [_services_jwt_guard__WEBPACK_IMPORTED_MODULE_7__["JwtGuard"]]
        }, {
          path: "tweets/all",
          component: _tweet_list_tweet_list_component__WEBPACK_IMPORTED_MODULE_4__["TweetListComponent"],
          canActivate: [_services_jwt_guard__WEBPACK_IMPORTED_MODULE_7__["JwtGuard"]]
        }, {
          path: "logout",
          redirectTo: "/login",
          pathMatch: "full"
        }, {
          path: 'user-list',
          component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"],
          canActivate: [_services_jwt_guard__WEBPACK_IMPORTED_MODULE_7__["JwtGuard"]]
        }, {
          path: 'passwordReset/:username',
          component: _reset_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_3__["ResetPassComponent"],
          canActivate: [_services_jwt_guard__WEBPACK_IMPORTED_MODULE_7__["JwtGuard"]]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_14_div_1_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.userName.errors.required);
        }
      }

      function LoginComponent_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_21_div_1_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
        }
      }

      function LoginComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Username or Password Incorrect");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, authService, router) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.authService = authService;
          this.router = router;
          this.submitted = false;
          this.resetSubmitted = false;
          this.loading = false;
          this.invalid = false;
          this.passwordResetComplete = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.authService.isLoggedIn()) {
              this.router.navigateByUrl('home');
            }

            this.loginForm = this.formBuilder.group({
              userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
            this.resetPasswordForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "resetPasswordSubmit",
          value: function resetPasswordSubmit() {
            var _this13 = this;

            this.resetSubmitted = true;
            this.authService.forgotPassword(this.resetPasswordForm.controls.username.value).subscribe(function (data) {
              if ((data.resetStatus !== undefined || data.resetStatus !== null) && data.resetStatus == 'success') {
                _this13.resetPasswordValue = data.newPassword;
              }

              _this13.passwordResetComplete = true;
            });
          }
        }, {
          key: "showResetPasswordModal",
          value: function showResetPasswordModal() {
            this.resetSubmitted = false;
            $('#resetPasswordModal').modal('show');
          }
        }, {
          key: "hideResetPasswordModal",
          value: function hideResetPasswordModal() {
            this.resetSubmitted = false;
            $('#resetPasswordModal').modal('hide');
          }
        }, {
          key: "getUsername",
          value: function getUsername() {
            return this.loginForm.get('userName').value;
          }
        }, {
          key: "getPassword",
          value: function getPassword() {
            return this.loginForm.get('password').value;
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this14 = this;

            console.log('Submitted');
            this.submitted = true;

            if (this.loginForm.invalid) {
              return;
            }

            this.loading = true;
            this.authService.login(this.getUsername(), this.getPassword()).subscribe(function (data) {
              if (data.loginStatus == 'success') {
                _this14.currentUser = data.user;
                console.log(_this14.currentUser);

                _this14.authService.setCurrentUser(_this14.currentUser);

                _this14.submitted = false;

                _this14.router.navigateByUrl('home');
              } else {
                _this14.invalid = true;
                _this14.loading = false;
              }
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 35,
        vars: 10,
        consts: [["src", "../../assets/tweet1.png", 2, "width", "40px", "height", "40px"], [1, "login"], [3, "formGroup", "ngSubmit"], [1, "d-flex", "justify-content-center", "align-items-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "30", "fill", "white", "viewBox", "0 0 16 16", 1, "bi", "bi-file-lock"], ["d", "M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z"], ["d", "M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"], ["type", "text", "formControlName", "userName", "placeholder", "Username", 1, "user-input", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "pass-input", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["type", "submit", 2, "background-color", "#4CAF50", "/* green */\n      border", "none", "color", "white", "padding", "3px 12px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "16px"], [1, "font-weight-bold", 2, "color", "aliceblue"], ["routerLink", "register", 1, "text-info"], ["type", "submit", 2, "background-color", "#544bf1", "/* green */\n        border", "none", "color", "white", "padding", "1px 12px", "text-align", "center", "text-decoration", "none", "display", "inline-block", "font-size", "15px"], [1, "invalid-feedback"], [4, "ngIf"], [1, "text-danger"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "TweeT");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "User Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 3, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Don't have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.submitted && ctx.f.userName.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.userName.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["body[_ngcontent-%COMP%]  \r\n{  \r\n    margin: 0;  \r\n    padding: 0;  \r\n    background-color:#030d12ba;  \r\n    font-family: 'Arial';  \r\n    \r\n}  \r\n\r\n.login[_ngcontent-%COMP%]{  \r\n        width: 382px;  \r\n        \r\n        overflow: hidden;  \r\n        margin: auto;  \r\n        margin: 20 0 0 450px;  \r\n        padding: 60px;  \r\n        background: #080808;  \r\n        border-radius: 15px ; \r\n        opacity: 0.8; \r\n          \r\n}  \r\n\r\n.button[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50; \r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n  }  \r\n\r\nh2[_ngcontent-%COMP%]{  \r\n    text-align: center;  \r\n    color: #000101;  \r\n    padding: 20px;  \r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}  \r\n\r\nlabel[_ngcontent-%COMP%]{  \r\n    color: #fdfefe;  \r\n    font-size: 17px;  \r\n}  \r\n\r\n#Uname[_ngcontent-%COMP%]{  \r\n    width: 300px;  \r\n    height: 30px;  \r\n    border: none;  \r\n    border-radius: 3px;  \r\n    padding-left: 8px;  \r\n}  \r\n\r\n#Pass[_ngcontent-%COMP%]{  \r\n    width: 300px;  \r\n    height: 30px;  \r\n    border: none;  \r\n    border-radius: 3px;  \r\n    padding-left: 8px;  \r\n      \r\n}  \r\n\r\n#log[_ngcontent-%COMP%]{  \r\n    width: 300px;  \r\n    height: 30px;  \r\n    border: none;  \r\n    border-radius: 17px;  \r\n    padding-left: 7px;  \r\n    color: blue;  \r\n  \r\n  \r\n}  \r\n\r\nspan[_ngcontent-%COMP%]{  \r\n    color: white;  \r\n    font-size: 17px;  \r\n}  \r\n\r\na[_ngcontent-%COMP%]{  \r\n    float: right;  \r\n    background-color: grey;  \r\n}  \r\n\r\ninput[_ngcontent-%COMP%]{\r\n    width: 250px;;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsb0JBQW9COztBQUV4Qjs7QUFFQTtRQUNRLFlBQVk7O1FBRVosZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsWUFBWTs7QUFFcEI7O0FBQ0E7SUFDSSx5QkFBeUIsRUFBRSxVQUFVO0lBQ3JDLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYiwyREFBMkQ7QUFDL0Q7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVzs7O0FBR2Y7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5ICBcclxueyAgXHJcbiAgICBtYXJnaW46IDA7ICBcclxuICAgIHBhZGRpbmc6IDA7ICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAzMGQxMmJhOyAgXHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJzsgIFxyXG4gICAgXHJcbn0gIFxyXG5cclxuLmxvZ2lueyAgXHJcbiAgICAgICAgd2lkdGg6IDM4MnB4OyAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgIFxyXG4gICAgICAgIG1hcmdpbjogYXV0bzsgIFxyXG4gICAgICAgIG1hcmdpbjogMjAgMCAwIDQ1MHB4OyAgXHJcbiAgICAgICAgcGFkZGluZzogNjBweDsgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwODA4MDg7ICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDsgXHJcbiAgICAgICAgb3BhY2l0eTogMC44OyBcclxuICAgICAgICAgIFxyXG59ICBcclxuLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuaDJ7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgY29sb3I6ICMwMDAxMDE7ICBcclxuICAgIHBhZGRpbmc6IDIwcHg7ICBcclxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59ICBcclxubGFiZWx7ICBcclxuICAgIGNvbG9yOiAjZmRmZWZlOyAgXHJcbiAgICBmb250LXNpemU6IDE3cHg7ICBcclxufSAgXHJcbiNVbmFtZXsgIFxyXG4gICAgd2lkdGg6IDMwMHB4OyAgXHJcbiAgICBoZWlnaHQ6IDMwcHg7ICBcclxuICAgIGJvcmRlcjogbm9uZTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDsgIFxyXG59ICBcclxuI1Bhc3N7ICBcclxuICAgIHdpZHRoOiAzMDBweDsgIFxyXG4gICAgaGVpZ2h0OiAzMHB4OyAgXHJcbiAgICBib3JkZXI6IG5vbmU7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7ICBcclxuICAgICAgXHJcbn0gIFxyXG4jbG9neyAgXHJcbiAgICB3aWR0aDogMzAwcHg7ICBcclxuICAgIGhlaWdodDogMzBweDsgIFxyXG4gICAgYm9yZGVyOiBub25lOyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4OyAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDsgIFxyXG4gICAgY29sb3I6IGJsdWU7ICBcclxuICBcclxuICBcclxufSAgXHJcbnNwYW57ICBcclxuICAgIGNvbG9yOiB3aGl0ZTsgIFxyXG4gICAgZm9udC1zaXplOiAxN3B4OyAgXHJcbn0gIFxyXG5heyAgXHJcbiAgICBmbG9hdDogcmlnaHQ7ICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7ICBcclxufSAgXHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDI1MHB4OztcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "wpw0":
    /*!**********************************************!*\
      !*** ./src/app/services/TokenInterceptor.ts ***!
      \**********************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function wpw0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(auth) {
          _classCallCheck(this, TokenInterceptor);

          this.auth = auth;
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            request = request.clone({
              setHeaders: {
                Authorization: "".concat(this.auth.getToken())
              }
            });
            return next.handle(request);
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenInterceptor,
        factory: TokenInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "xaUa":
    /*!**********************************************!*\
      !*** ./src/app/services/ErrorInterceptor.ts ***!
      \**********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function xaUa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(auth) {
          _classCallCheck(this, ErrorInterceptor);

          this.auth = auth;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this15 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              if (err.status === 401) {
                // auto logout if 401 response returned from api
                alert('You need to login first');

                _this15.auth.logout();

                location.reload();
              }

              var error = err.error.message || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map