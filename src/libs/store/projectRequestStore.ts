import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

export interface ProjectRequestState {
  projectCategory: string[];
  projectField: string[];
  projectProgressClassification: string;
  planningStatus: string;
  detailedPlanningStatus: string[];
  detailedPlanningText: string;
  referenceMaterials: string[];
  projectTitle: string;
  detailedTaskDescription: string;
  relatedTechnologies: string[];
  availableBudget: number;
  budgetNegotiable: boolean;
  expectedStartDate: Date | null;
  startDateNegotiable: boolean;
  expectedDuration: string;
  durationNegotiable: boolean;
  preMeetingMethod: string;

  meetingMethod: string;
  meetingFrequency: string;
  clientLocationCity: string;
  clientLocationDistrict: string;

  applicationDeadline: Date | null;
  isFundingAvailable: string;
  isFundingAvailableSub: string;

  applicantRequirements: string[];
  applicantRequirementsSub: string[];

  preliminaryVerificationQuestions: string;

  collaborationTeamComposition: string;
  isCollaborationTeamComposition: boolean;

  itProjectManagementExperience: string;
  futurePlans: string[];
  projectPriorityFirst: string;
  projectPrioritySecond: string;
  projectPriorityThird: string;
  interestedProducts: string[];
  toggleArrayItem: <K extends keyof ProjectRequestState>(
    key: K,
    item: ProjectRequestState[K] extends Array<any>
      ? ProjectRequestState[K][number]
      : never
  ) => void;
  updateArrayState: <K extends keyof ProjectRequestState>(
    key: K,
    action: 'add' | 'remove',
    item: ProjectRequestState[K] extends Array<any>
      ? ProjectRequestState[K][number]
      : never
  ) => void;
  updateState: <K extends keyof ProjectRequestState>(
    key: K,
    value: ProjectRequestState[K]
  ) => void;
  resetStore: () => void;
}

export const initialState = {
  projectCategory: [],
  projectField: [],
  projectProgressClassification: '',
  planningStatus: '',
  detailedPlanningStatus: [],
  detailedPlanningText: '',
  referenceMaterials: [],
  projectTitle: '',
  detailedTaskDescription: '',
  relatedTechnologies: [],
  availableBudget: 0,
  budgetNegotiable: false,

  expectedStartDate: null,
  startDateNegotiable: false,

  expectedDuration: '',
  durationNegotiable: false,

  preMeetingMethod: '',

  meetingMethod: '',
  meetingFrequency: '',

  applicationDeadline: null,
  isFundingAvailable: '',
  isFundingAvailableSub: '',

  applicantRequirements: [],
  applicantRequirementsSub: [],
  preliminaryVerificationQuestions: '',

  clientLocationCity: '',
  clientLocationDistrict: '',
  collaborationTeamComposition: '',
  isCollaborationTeamComposition: false,

  itProjectManagementExperience: '',
  futurePlans: [],
  projectPriorityFirst: '',
  projectPrioritySecond: '',
  projectPriorityThird: '',
  interestedProducts: [],
};

const useProjectRequestStore = create<ProjectRequestState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        // 초기화 함수
        resetStore: () => set(() => ({ ...initialState })),
        // 배열 상태를 자동으로 업데이트하는 함수
        toggleArrayItem: <K extends keyof ProjectRequestState>(
          key: K,
          item: ProjectRequestState[K] extends Array<any>
            ? ProjectRequestState[K][number]
            : never
        ) =>
          set((state) => {
            const array = (state[key] as Array<any>) ?? [];
            const itemExists = array.includes(item);
            const newArray = itemExists
              ? array.filter((i) => i !== item) // 항목 제거
              : [...array, item]; // 항목 추가
            return { ...state, [key]: newArray };
          }),
        // 배열 상태만을 대상으로 하는 범용 업데이트 함수
        updateArrayState: <K extends keyof ProjectRequestState>(
          key: K,
          action: 'add' | 'remove',
          item: ProjectRequestState[K] extends Array<any>
            ? ProjectRequestState[K][number]
            : never
        ) =>
          set((state) => {
            const array = (state[key] as Array<any>) ?? [];
            let newArray = array;

            if (action === 'add') {
              newArray = array.includes(item) ? array : [...array, item];
            } else if (action === 'remove') {
              newArray = array.filter((i) => i !== item);
            }

            return { ...state, [key]: newArray };
          }),

        // 일반 업데이트 함수
        updateState: <K extends keyof ProjectRequestState>(
          key: K,
          value: ProjectRequestState[K]
        ) => set((state) => ({ ...state, [key]: value })),
      }),
      {
        name: 'project-request',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useProjectRequestStore;
