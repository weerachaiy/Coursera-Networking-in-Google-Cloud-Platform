(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"9wTT":function(module,exports,e){var t=e("HHcN"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},FkXZ:function(module,exports,e){var t=e("l110"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},HHcN:function(module,exports,e){},USJv:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("MnCE"),i=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a=_objectWithoutPropertiesLoose(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){if(n=i[r],t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;a[n]=e[n]}}return a}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++){if(r=n[i],t.indexOf(r)>=0)continue;a[r]=e[r]}return a}var o=function SvgaChart(e){var t=e.title,n=void 0===t?"Chart":t,r=_objectWithoutProperties(e,["title"]);return a.createElement(i.a,_extends({title:n},r,{viewBox:"0 0 41 37"}),a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"#F26C75",d:"M5 32h32V0H5z"}),a.createElement("path",{stroke:"#424242",strokeWidth:"2",d:"M8 28l9.263-12.572 10.105 8.98L40 6"}),a.createElement("path",{stroke:"#4D4D4D",strokeWidth:"2",d:"M1 0v36h40"})))};(o=Object(r.pure)(o)).displayName="SvgaChart",e.a=o},Vh8P:function(module,e,t){"use strict";var a=t("UB5X"),n=t.n(a),r=t("sbe7"),i=t.n(r),o=t("EqTq"),s=t("AWZ4"),l=t("m10x"),c=t("CsdX"),m=t("CfbJ"),u=t("d3Ej"),p=t.n(u),d=t("vRSd"),f=t("kvW3"),v=t("lEg3"),b=t("RSmF"),g=t("9wTT"),h=t.n(g),E=Object(o.a)("CoverPageRowRightSideActions"),y=function renderActionButton(e,t){return i.a.createElement(s.b,{size:"sm",type:"primary",label:e,onClick:t,htmlAttributes:{"aria-label":p()("#{action} quiz",{action:e})}})},L=function CoverPageRowRightSideActions(e){var t=e.startAttempt,a=e.restartAttempt,r=e.resumeAttempt,o=e.retryAttempt,u=e.submissionTime,g=e.showTimer,h=e.timeLimit,L=e.timerId,S=e.attemptsLeft,P=e.secondsLeftInLatestAttempt,j=e.attemptLimitTimeLeft,C=null,O=n()(j)||"number"==typeof S&&0===S;return t?C=y(p()("Start"),t):a?C=y(p()("Restart"),a):r?C=y(p()("Resume"),r):o&&(C=i.a.createElement(s.b,{size:"sm",type:"link",label:p()("Try again"),onClick:o,disabled:O})),i.a.createElement("div",{className:E()},i.a.createElement("div",{className:E("action-button",{linkStyle:!!o})},C),O&&n()(j)&&i.a.createElement("div",{className:E("retry-info")},i.a.createElement(l.a,null,i.a.createElement(f.b,{message:p()("Retake the quiz in {attemptLimitTimeLeft}"),attemptLimitTimeLeft:i.a.createElement("strong",null,Object(v.c)(j))}))),u&&i.a.createElement("div",{className:E("submission-time")},i.a.createElement(l.a,null,i.a.createElement(l.h,{tag:"span"},p()("Submitted"))," ",i.a.createElement("span",{className:E("submission-time-detail")},d.a.getFormattedDeadline(u)))),n()(h)&&t&&i.a.createElement("div",{className:E("time-limit")},i.a.createElement(l.a,null,i.a.createElement(m.a,{size:20,color:c.b.primary}),i.a.createElement("span",{className:E("time-limit-text")},i.a.createElement(f.b,{message:p()("You will have {timeLimit} to finish"),timeLimit:Object(v.c)(h,!0)})))),g&&n()(P)&&i.a.createElement(b.b,{timerId:L,remainingTimeInMs:1e3*P,displayRemaining:!0}))};e.a=L},XSZB:function(module,exports,e){var t=e("mh1o"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},fHLu:function(module,e,t){"use strict";t.d(e,"a",function(){return r});var a=t("4X/0"),n=function clearQuizApolloCache(e){Object(a.a)(e.cache,["RestQuizSessionMetadataElement","RestQuizQuestionDataElement","LocalTimerState","LocalChangedResponse","LocalStepState"])},r=function clearPracticeQuizApolloCache(e){Object(a.a)(e.cache,["LocalChangedResponse","LocalStepState"])};e.b=n},l110:function(module,exports,e){},mh1o:function(module,exports,e){},pRpZ:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("EqTq"),i=t("w+/x"),o=t("USJv"),s=t("m10x"),l=t("kvW3"),c=t("d3Ej"),m=t.n(c),u=t("FkXZ"),p=t.n(u),d=Object(r.a)("CoverPageNudges"),f=function LikelihoodNudge(e){var t=e.value,a=Math.ceil(t/100);return n.a.createElement("div",{className:d()},n.a.createElement("div",{className:d("svg-icon")},n.a.createElement(o.a,{size:48})),n.a.createElement("div",{className:d("message")},n.a.createElement(s.j,null,m()("Get closer to your goal")),n.a.createElement(l.b,{message:m()("You are {value} more likely to complete the course if you finish the assignment"),value:n.a.createElement("strong",null,a>1?a+m()(" times"):t+"%"),tagName:"p",rootClassName:d("info")})))},v=function SocialNudge(e){var t=e.value;return n.a.createElement("div",{className:d()},n.a.createElement("div",{className:d("svg-icon")},n.a.createElement(i.a,{size:48}),","),n.a.createElement("div",{className:d("message")},n.a.createElement(s.j,null,m()("People are making progress")),n.a.createElement(l.b,{message:m()("{numOfLearners} learners have recently completed this assignment"),numOfLearners:n.a.createElement("strong",null,t),tagName:"p",rootClassName:d("info")})))},b=function CoverPageNudges(e){var t=e.nudge,a=t.nudgeType,r=t.nudgeNumber;switch(a){case"social":return n.a.createElement(v,{value:r});case"likelihood":return n.a.createElement(f,{value:r});default:return null}};e.a=b},"w+/x":function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("MnCE"),i=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a=_objectWithoutPropertiesLoose(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){if(n=i[r],t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;a[n]=e[n]}}return a}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++){if(r=n[i],t.indexOf(r)>=0)continue;a[r]=e[r]}return a}var o=function SvgaPen(e){var t=e.title,n=void 0===t?"Pen":t,r=_objectWithoutProperties(e,["title"]);return a.createElement(i.a,_extends({title:n},r,{viewBox:"0 0 36 44"}),a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{d:"M36 25.855C36 35.845 20.836 44 10.895 44S0 35.846 0 25.855C0 15.865 13.185 8 23.127 8 33.067 8 36 15.864 36 25.855",fill:"#F3C800"}),a.createElement("path",{stroke:"#4D4D4D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M21.907 4.781l6.751 12.248-10.823 17.146L7.253 17.181l6.999-12.452M8.428 4.081h19.359V1H8.427zM17.954 33.074V21.186"}),a.createElement("path",{d:"M15.23 18.272a2.723 2.723 0 1 1 5.447 0 2.723 2.723 0 0 1-5.446 0z",stroke:"#4D4D4D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))};(o=Object(r.pure)(o)).displayName="SvgaPen",e.a=o},wrIk:function(module,e,t){"use strict";t.r(e),t.d(e,"QuizCoverPage",function(){return F});var a=t("MVZn"),n=t.n(a),r=t("VbXa"),i=t.n(r),o=t("sbe7"),s=t.n(o),l=t("oJmH"),c=t.n(l),m=t("sBWo"),u=t("fHLu"),p=t("NKt0"),d=t("pRpZ"),f=t("TO9F"),v=t("scbn"),b=t("qJwm"),g=t("+LJP"),h=t("MqGB"),E=t("nlef"),y=t("Vh8P"),L=t("eXDi"),S=t("zaiP"),P=t("LHEl"),j=t("kYu0"),C=t("VtNW"),O=t.n(C),k=t("VMeS"),w=t("8ec0"),A=t("xXQ2"),N=t("KvdX"),T=t("TOZ3"),R=t("EqTq"),z=t("XSZB"),x=t.n(z),I=Object(R.a)("QuizCoverPage"),F=function(e){function QuizCoverPage(){for(var t,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).getRestartAttemptFunction=function(e,a,r){return function(){if(a&&r){if(r.isLastAttemptBeforeLock||1===r.attemptsLeft)return void a({type:N.a.lastAttemptModal,props:n()({},r,{onPrimaryButtonClick:t.getRestartAttemptFunction(e)})});if("number"==typeof r.timeLimit)return void a({type:N.a.timedAttemptStart,props:n()({},r,{onPrimaryButtonClick:t.getRestartAttemptFunction(e)})})}var i=t.props.openAttemptPage;Object(u.b)(e),i()}},t}var t;return i()(QuizCoverPage,e),QuizCoverPage.prototype.render=function render(){var e=this,t=this.props,a=t.children,n=t.openSubmittedAttemptPage;return s.a.createElement(S.a,null,function(t){var r=t.item;if(!r||!r.contentSummary)return s.a.createElement(k.a,null);return s.a.createElement(P.a,{courseId:r.courseId,itemId:r.id},function(t){var i=t.loading,o=t.lastSessionId,c=t.lockingConfigurationSummary,m=t.unsubmittedSessionId,g=t.bestEvaluation,S=t.nudge,P=t.refetch;if(!r||!r.contentSummary||i)return s.a.createElement(k.a,null);if("exam"===r.contentSummary.typeName){var C=r.contentSummary.definition,R=r.isCumulativeGraded;return s.a.createElement(f.a,null,s.a.createElement(T.b,{justifyContent:"between",rootClassName:I("header-container")},s.a.createElement(p.a,{assignmentTypeName:O()("Quiz"),item:r}),S&&s.a.createElement(d.a,{nudge:S})),s.a.createElement(j.a,{standardProctorConfigurationId:C.standardProctorConfigurationId},function(t){var a=t.timeLimit,n=t.secondsLeftInLatestAttempt,i=t.remainingAttempts,l=t.completedAttempts,u=t.client;return s.a.createElement(h.b,{stepTitle:O()("Submit your assignment"),stepDetails:s.a.createElement(E.a,{deadline:r.deadline,attemptsRateCount:(c||{}).allowedSubmissionsPerInterval,attemptsRateInterval:(c||{}).allowedSubmissionsInterval,attemptsLeft:i,attemptsCompleted:l}),rightSideView:s.a.createElement(N.b,null,function(t){var l=t.showModal,p={timeLimit:a,attemptsLeft:i,lockedTimeLeft:Object(A.b)(c),isLastAttemptBeforeLock:Object(A.c)(c),hasAttemptLimit:!!c&&c.allowedSubmissionsPerInterval>0};return s.a.createElement(y.a,{startAttempt:o||m?void 0:e.getRestartAttemptFunction(u,l,p),resumeAttempt:m?e.getRestartAttemptFunction(u):void 0,timeLimit:a,showTimer:!!m,timerId:Object(w.a)(r.id),secondsLeftInLatestAttempt:n,retryAttempt:e.getRestartAttemptFunction(u,l,p),attemptLimitTimeLeft:Object(A.a)(c),attemptsLeft:i})}),statusIconType:o?h.a.check:void 0})}),s.a.createElement(h.b,{stepTitle:O()("Receive grade"),stepDetails:s.a.createElement(E.a,{passingFraction:C.passingFraction,isCumulativeGraded:R}),rightSideView:s.a.createElement(l.ApolloConsumer,null,function(e){return s.a.createElement(L.a,{itemGrade:r.itemGrade,computedScore:(g||{}).score,maxScore:(g||{}).maxScore,isCumulativeGraded:R,viewFeedback:o?function(){Object(u.b)(e),n()}:void 0,isViewFeedbackButtonLinkStyle:!!m})}),statusIconType:Object(h.c)((r.itemGrade||{}).isPassed,R)}),s.a.createElement(h.b,{rightSideView:s.a.createElement(v.a,{computedItem:r,itemFeedbackType:b.m.Quiz})}),a&&P&&s.a.cloneElement(a,{refetchCoverPageData:function refetchCoverPageData(){return P().then(function(){return r.refetch()})}}))}return null})})},QuizCoverPage}(s.a.Component),M=Object(g.a)(function(e){return{openAttemptPage:function openAttemptPage(){e.push({name:"quiz-attempt",params:e.params})},openSubmittedAttemptPage:function openSubmittedAttemptPage(){e.push({name:"quiz-view-attempt",params:e.params})}}})(F);e.default=Object(m.a)(M)}}]);
//# sourceMappingURL=46.7bbccaa3909a06b5ddff.js.map